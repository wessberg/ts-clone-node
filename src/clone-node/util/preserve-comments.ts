import {CloneNodeInternalOptions, NodeHookValue} from "../clone-node-options";
import {MetaNode} from "../type/meta-node";
import {cloneNodes} from "../clone-nodes";
import {nextOptions} from "./next-options";
import {payload} from "./payload";
import {TS} from "../type/ts";

function formatCommentRange({pos, end}: TS.CommentRange): string {
	return `${pos}:${end}`;
}

export function preserveComments<T extends MetaNode>(node: T, oldNode: T, options: CloneNodeInternalOptions<T>): T {
	node.jsDoc = options.hook(
		"jsDoc",
		cloneNodes(oldNode.jsDoc, nextOptions(options)) as NodeHookValue<T, "jsDoc">,
		oldNode.jsDoc as NodeHookValue<T, "jsDoc">,
		payload(options)
	) as TS.JSDoc[] | undefined;

	const oldSourceFile = options.sourceFile;
	if (oldSourceFile == null) return node;
	const sourceFileText = oldSourceFile.text;

	const comments: [string, boolean, TS.SyntaxKind.SingleLineCommentTrivia | TS.SyntaxKind.MultiLineCommentTrivia, boolean][] = [];

	for (const leadingOrTrailing of ["getLeadingCommentRanges", "getTrailingCommentRanges"] as const) {
		const leadingCommentRanges = options.typescript[leadingOrTrailing](oldSourceFile.text, oldNode.pos) ?? [];
		const trailingCommentRanges = options.typescript[leadingOrTrailing](oldSourceFile.text, oldNode.end) ?? [];
		const commentRanges = [
			...leadingCommentRanges.map(range => ({...range, hasTrailingNewLine: Boolean(range.hasTrailingNewLine), leading: true})),
			...trailingCommentRanges.map(range => ({...range, hasTrailingNewLine: Boolean(range.hasTrailingNewLine), leading: false}))
		];

		for (const commentRange of commentRanges) {
			if (options.commentRanges.has(formatCommentRange(commentRange))) continue;
			options.commentRanges.add(formatCommentRange(commentRange));
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
			options.typescript.addSyntheticLeadingComment(node, commentKind, slicedComment, hasTrailingNewLine);
		} else {
			options.typescript.addSyntheticTrailingComment(node, commentKind, slicedComment, hasTrailingNewLine);
		}
	}

	return node;
}
