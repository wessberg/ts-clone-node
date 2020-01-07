import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocReturnTag
 */
export function isJsDocReturnTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocReturnTag {
	return node.kind === typescript.SyntaxKind.JSDocReturnTag;
}
