import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocNullableType
 */
export function isJsDocNullableType(node: MetaNode, typescript: typeof TS): node is TS.JSDocNullableType {
	// TypeScript 4.x
	if ("isJSDocNullableType" in typescript) {
		return typescript.isJSDocNullableType(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocNullableType;
}
