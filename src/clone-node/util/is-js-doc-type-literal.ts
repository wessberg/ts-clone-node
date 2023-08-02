import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocTypeLiteral
 */
export function isJsDocTypeLiteral(node: MetaNode, typescript: typeof TS): node is TS.JSDocTypeLiteral {
	// TypeScript 4.x
	if (("isJSDocTypeLiteral" in typescript) as never) {
		return typescript.isJSDocTypeLiteral(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocTypeLiteral;
}
