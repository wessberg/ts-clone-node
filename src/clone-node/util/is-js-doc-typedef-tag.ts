import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocTypedefTag
 */
export function isJSDocTypedefTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocTypedefTag {
	return node.kind === typescript.SyntaxKind.JSDocTypedefTag;
}
