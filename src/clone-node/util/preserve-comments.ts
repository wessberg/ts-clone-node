import {CloneNodeInternalOptions, CloneNodeOptions} from "../clone-node-options";
import {MetaNode} from "../type/meta-node";
import {cloneNodes} from "../clone-nodes";
import {nextOptions} from "./next-options";
import {payload} from "./payload";
import {TS} from "../type/ts";
import {toInternalOptions} from "./to-internal-options";

function formatCommentRange({pos, end}: TS.CommentRange): string {
	return `${pos}:${end}`;
}

export function preserveComments<T extends MetaNode>(node: T, oldNode: T, options: Partial<CloneNodeOptions<T>> | CloneNodeInternalOptions = {}): T {
	const internalOptions = toInternalOptions(node, options);

	node.jsDoc = internalOptions.hook("jsDoc", cloneNodes(oldNode.jsDoc, nextOptions(internalOptions)), oldNode.jsDoc, payload(internalOptions));

	const oldSourceFile = options.sourceFile;
	if (oldSourceFile == null) return node;
	const sourceFileText = oldSourceFile.text;

	const comments: [string, boolean, TS.SyntaxKind.SingleLineCommentTrivia | TS.SyntaxKind.MultiLineCommentTrivia, boolean][] = [];

	for (const leadingOrTrailing of ["getLeadingCommentRanges", "getTrailingCommentRanges"] as const) {
		const leadingCommentRanges = internalOptions.typescript[leadingOrTrailing](oldSourceFile.text, oldNode.pos) ?? [];
		const trailingCommentRanges = internalOptions.typescript[leadingOrTrailing](oldSourceFile.text, oldNode.end) ?? [];
		const commentRanges = [
			...leadingCommentRanges.map(range => ({...range, hasTrailingNewLine: Boolean(range.hasTrailingNewLine), leading: true})),
			...trailingCommentRanges.map(range => ({...range, hasTrailingNewLine: Boolean(range.hasTrailingNewLine), leading: false}))
		];

		for (const commentRange of commentRanges) {
			if (internalOptions.commentRanges.has(formatCommentRange(commentRange))) continue;
			internalOptions.commentRanges.add(formatCommentRange(commentRange));
			let text = sourceFileText.substring(commentRange.pos, commentRange.end);

			if (!text.startsWith("//") && !text.startsWith("/*")) continue;

			comments.push([text, commentRange.leading, commentRange.kind, commentRange.hasTrailingNewLine]);
		}
	}

	for (const [comment, leading, commentKind, hasTrailingNewLine] of comments) {
		let slicedComment: string;

		if (comment.startsWith("/**")) {
			// 'addSyntheticLeadingComment' will place the leading '/*' and the trailing '*/', so these two parts must be stripped
			// from the text before passing it to TypeScript
			slicedComment = comment.slice(2, comment.length - 2);
		} else if (comment.startsWith("/*")) {
			// 'addSyntheticLeadingComment' will place the leading '/*' and the trailing '*/', so these two parts must be stripped
			// from the text before passing it to TypeScript
			slicedComment = comment.slice(2, comment.length - 2);
		} else {
			// 'addSyntheticLeadingComment' will place the leading '//', so this part must be stripped
			// from the text before passing it to TypeScript
			slicedComment = comment.slice(2);
		}

		if (leading) {
			internalOptions.typescript.addSyntheticLeadingComment(node, commentKind, slicedComment, hasTrailingNewLine);
		} else {
			internalOptions.typescript.addSyntheticTrailingComment(node, commentKind, slicedComment, hasTrailingNewLine);
		}
	}

	return node;
}
