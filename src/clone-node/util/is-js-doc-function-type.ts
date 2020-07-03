import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocFunctionType
 */
export function isJsDocFunctionType(node: MetaNode, typescript: typeof TS): node is TS.JSDocFunctionType {
	// TypeScript 4.x
	if (("isJSDocFunctionType" in typescript) as never) {
		return typescript.isJSDocFunctionType(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocFunctionType;
}
