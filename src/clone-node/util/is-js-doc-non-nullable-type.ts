import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocNonNullableType
 */
export function isJsDocNonNullableType(node: MetaNode, typescript: typeof TS): node is TS.JSDocNonNullableType {
	return node.kind === typescript.SyntaxKind.JSDocNonNullableType;
}
