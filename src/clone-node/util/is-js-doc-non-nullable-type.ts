import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocNonNullableType
 */
export function isJsDocNonNullableType(node: MetaNode, typescript: typeof TS): node is TS.JSDocNonNullableType {
	// TypeScript 4.x
	if (("isJSDocNonNullableType" in typescript) as never) {
		return typescript.isJSDocNonNullableType(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocNonNullableType;
}
