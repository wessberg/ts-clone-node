import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocParameterTag
 */
export function isJsDocParameterTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocParameterTag {
	return node.kind === typescript.SyntaxKind.JSDocParameterTag;
}
