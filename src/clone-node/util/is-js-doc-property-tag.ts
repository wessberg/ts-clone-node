import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocPropertyTag
 */
export function isJsDocPropertyTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocPropertyTag {
	return node.kind === typescript.SyntaxKind.JSDocPropertyTag;
}
