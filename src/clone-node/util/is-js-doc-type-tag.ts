import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocTypeTag
 */
export function isJsDocTypeTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocTypeTag {
	return node.kind === typescript.SyntaxKind.JSDocTypeTag;
}
