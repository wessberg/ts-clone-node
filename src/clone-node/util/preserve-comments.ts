import type {MetaNode} from "../type/meta-node.js";
import type {TS} from "../type/ts.js";
import type {CloneNodeInternalOptions} from "../clone-node-options.js";
import {getOriginalNode} from "./get-original-node.js";

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

export interface PreserveCommentsOptions extends CloneNodeInternalOptions {}

function getCommentRanges<T extends MetaNode>(node: T, options: PreserveCommentsOptions): TSComment[] {
	const comments: TSComment[] = [];
	const originalNode = getOriginalNode(node, options);

	const sourceFile = originalNode.getSourceFile() as TS.SourceFile | undefined;

	if (sourceFile == null || originalNode.pos === -1 || originalNode.end === -1) return [];

	const sourceFileText = sourceFile.getFullText();
	const pos = originalNode.getFullStart();
	const end = originalNode.getEnd();
	const leadingCommentRanges = options.typescript.getLeadingCommentRanges(sourceFileText, pos) ?? [];
	const trailingCommentRanges = options.typescript.getTrailingCommentRanges(sourceFileText, end) ?? [];

	if (leadingCommentRanges.length < 1) {
		// There may be one anyway such as will be the case when looking at the StringLiteral "foo" inside the following
		// source text: /** @type {string} */ "foo"
		const fullTextTrimmed = originalNode.getFullText().trim();

		// If the text includes one or more comments, mark them as leading comment ranges
		if (fullTextTrimmed.startsWith("//") || fullTextTrimmed.startsWith("/*")) {
			leadingCommentRanges.push(...(options.typescript.getTrailingCommentRanges(sourceFileText, pos) ?? []));
		}
	}

	const commentRanges = [
		...leadingCommentRanges.map(range => ({...range, hasTrailingNewLine: Boolean(range.hasTrailingNewLine), isLeading: true})),
		...trailingCommentRanges.map(range => ({...range, hasTrailingNewLine: Boolean(range.hasTrailingNewLine), isLeading: false}))
	];

	for (const commentRange of commentRanges) {
		if (options.commentRanges.has(formatCommentRange(commentRange))) continue;
		options.commentRanges.add(formatCommentRange(commentRange));
		let text = sourceFile.text.substring(commentRange.pos, commentRange.end);

		if (!text.startsWith("//") && !text.startsWith("/*")) continue;
		const isUsingLineCarriages = text.includes("\r\n");
		const isJsDoc = text.startsWith("/**");

		text = text
			.split(/\r?\n/)
			.map(line => line.trim())
			.map(line => (!isJsDoc || line.startsWith("/**") ? line : ` ${line}`))
			.join(isUsingLineCarriages ? `\r\n` : `\n`);

		if (text.startsWith("/**")) {
			// 'addSyntheticLeadingComment' will place the leading '/*' and the trailing '*/', so these two parts must be stripped
			// from the text before passing it to TypeScript
			text = text.slice(2, text.length - 2);
		} else if (text.startsWith("/*")) {
			// 'addSyntheticLeadingComment' will place the leading '/*' and the trailing '*/', so these two parts must be stripped
			// from the text before passing it to TypeScript
			text = text.slice(2, text.length - 2);
		} else {
			// 'addSyntheticLeadingComment' will place the leading '//', so this part must be stripped
			// from the text before passing it to TypeScript
			text = text.slice(2);
		}

		comments.push({
			...commentRange,
			text
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
		options.typescript.setSyntheticTrailingComments(node, undefined);
	}

	for (const {isLeading, text, hasTrailingNewLine, kind} of comments) {
		if (isLeading) {
			options.typescript.addSyntheticLeadingComment(node, kind, text, hasTrailingNewLine);
		} else {
			options.typescript.addSyntheticTrailingComment(node, kind, text, hasTrailingNewLine);
		}
	}
	return node;
}
