import {MetaNode} from "../type/meta-node";
import {TS} from "../type/ts";
import {CloneNodeInternalOptions} from "../clone-node-options";
import {getOriginalNode} from "./get-original-node";

function formatCommentRange({pos, end}: TS.CommentRange): string {
	return `${pos}:${end}`;
}

export interface TSComment {
	pos: number;
	end: number;
	text: string;
	isLeading: boolean;
	kind: TS.SyntaxKind.SingleLineCommentTrivia | TS.SyntaxKind.MultiLineCommentTrivia;
	hasTrailingNewLine: boolean;
}

export interface PreserveCommentsOptions extends CloneNodeInternalOptions {
	leading: boolean;
}

function getCommentRanges<T extends MetaNode>(node: T, options: PreserveCommentsOptions): TSComment[] {
	const comments: TSComment[] = [];
	const originalNode = getOriginalNode(node, options);

	const sourceFile = originalNode.getSourceFile();

	if (sourceFile == null || originalNode.pos === -1 || originalNode.end === -1) return [];
	const commentRanges = (options.leading
		? [
				...(options.typescript.getLeadingCommentRanges(sourceFile.text, originalNode.pos) ?? []),
				...(options.typescript.getTrailingCommentRanges(sourceFile.text, originalNode.pos) ?? [])
		  ]
		: [
				...(options.typescript.getLeadingCommentRanges(sourceFile.text, originalNode.end) ?? []),
				...(options.typescript.getTrailingCommentRanges(sourceFile.text, originalNode.end) ?? [])
		  ]
	).map(range => ({...range, hasTrailingNewLine: Boolean(range.hasTrailingNewLine), isLeading: options.leading}));

	for (const commentRange of commentRanges) {
		if (options.commentRanges.has(formatCommentRange(commentRange))) continue;
		options.commentRanges.add(formatCommentRange(commentRange));
		const text = sourceFile.text.substring(commentRange.pos, commentRange.end);

		if (!text.startsWith("//") && !text.startsWith("/*")) continue;
		const isUsingLineCarriages = text.includes("\r\n");
		const isJsDoc = text.startsWith("/**");

		comments.push({
			...commentRange,
			text: text
				.split(/\r?\n/)
				.map(line => line.trim())
				.map(line => (!isJsDoc || line.startsWith("/**") ? line : ` ${line}`))
				.join(isUsingLineCarriages ? `\r\n` : `\n`)
		});
	}
	return comments;
}

export function preserveAllComments<T extends MetaNode>(node: T, options: PreserveCommentsOptions): void {
	if (!options.preserveComments) return;
	preserveCommentsForOriginalNode(node, options);
	options.typescript.forEachChild(node, child => {
		preserveAllComments(child, options);
	});
}

function preserveCommentsForOriginalNode<T extends MetaNode>(node: T, options: PreserveCommentsOptions): void {
	if (options.typescript.isSourceFile(node)) return;
	const originalNode = getOriginalNode(node, options);
	if (node !== originalNode) preserveComments(node, originalNode, options);
}

export function preserveComments<T extends MetaNode>(node: T, oldNode: T, options: PreserveCommentsOptions): T {
	if (!options.preserveComments) return node;

	if (node.pos > -1 && node.end >= -1) {
		return node;
	}

	if (node.jsDoc == null && oldNode.jsDoc != null) {
		node.jsDoc = oldNode.jsDoc;
	}

	const comments = getCommentRanges(oldNode, options);

	if (comments.length > 0) {
		options.typescript.setSyntheticLeadingComments(node, undefined);
	}

	for (const {isLeading, text, hasTrailingNewLine, kind} of comments) {
		let slicedComment: string;

		if (text.startsWith("/**")) {
			// 'addSyntheticLeadingComment' will place the leading '/*' and the trailing '*/', so these two parts must be stripped
			// from the text before passing it to TypeScript
			slicedComment = text.slice(2, text.length - 2);
		} else if (text.startsWith("/*")) {
			// 'addSyntheticLeadingComment' will place the leading '/*' and the trailing '*/', so these two parts must be stripped
			// from the text before passing it to TypeScript
			slicedComment = text.slice(2, text.length - 2);
		} else {
			// 'addSyntheticLeadingComment' will place the leading '//', so this part must be stripped
			// from the text before passing it to TypeScript
			slicedComment = text.slice(2);
		}

		if (isLeading) {
			options.typescript.addSyntheticLeadingComment(node, kind, slicedComment, hasTrailingNewLine);
		} else {
			options.typescript.addSyntheticTrailingComment(node, kind, slicedComment, hasTrailingNewLine);
		}
	}
	return node;
}
