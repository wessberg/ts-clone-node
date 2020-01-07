import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocNullableType
 */
export function isJsDocNullableType(node: MetaNode, typescript: typeof TS): node is TS.JSDocNullableType {
	return node.kind === typescript.SyntaxKind.JSDocNullableType;
}
