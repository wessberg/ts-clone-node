import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocAuthorTag
 */
export function isJSDocAuthorTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocAuthorTag {
	return node.kind === typescript.SyntaxKind.JSDocAuthorTag;
}
