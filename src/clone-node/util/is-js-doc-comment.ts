import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocComment
 */
export function isJsDocComment(node: MetaNode, typescript: typeof TS): node is TS.JSDoc {
	// TypeScript 4.x
	if ("isJSDoc" in typescript) {
		return typescript.isJSDoc(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocComment;
}
