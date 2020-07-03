import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocTypeExpression
 */
export function isJsDocTypeExpression(node: MetaNode, typescript: typeof TS): node is TS.JSDocTypeExpression {
	// TypeScript 4.x
	if (("isJSDocTypeExpression" in typescript) as never) {
		return typescript.isJSDocTypeExpression(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocTypeExpression;
}
