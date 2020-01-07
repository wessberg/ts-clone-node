import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocComment
 */
export function isJsDocComment(node: MetaNode, typescript: typeof TS): node is TS.JSDoc {
	return node.kind === typescript.SyntaxKind.JSDocComment;
}
