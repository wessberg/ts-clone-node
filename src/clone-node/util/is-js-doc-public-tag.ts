import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocPublicTag
 */
export function isJSDocPublicTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocPublicTag {
	return node.kind === typescript.SyntaxKind.JSDocPublicTag;
}
