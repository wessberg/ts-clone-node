import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

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
