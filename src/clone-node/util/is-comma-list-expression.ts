import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a CommaListExpression
 */
export function isCommaListExpression(node: MetaNode, typescript: typeof TS): node is TS.CommaListExpression {
	// TypeScript 4.x
	if (("isCommaListExpression" in typescript) as never) {
		return typescript.isCommaListExpression(node);
	}
	return node.kind === typescript.SyntaxKind.CommaListExpression;
}
