import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocCallbackTag
 */
export function isJSDocCallbackTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocCallbackTag {
	return node.kind === typescript.SyntaxKind.JSDocCallbackTag;
}
