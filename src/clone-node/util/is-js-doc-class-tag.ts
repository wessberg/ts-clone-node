import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocClassTag
 */
export function isJSDocClassTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocClassTag {
	return node.kind === typescript.SyntaxKind.JSDocClassTag;
}
