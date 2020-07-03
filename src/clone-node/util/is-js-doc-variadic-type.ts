import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocVariadicType
 */
export function isJsDocVariadicType(node: MetaNode, typescript: typeof TS): node is TS.JSDocVariadicType {
	// TypeScript 4.x
	if (("isJSDocVariadicType" in typescript) as never) {
		return typescript.isJSDocVariadicType(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocVariadicType;
}
