import {TS} from "../type/ts";

/**
 * Returns true if the given Node is a CommaListExpression
 */
export function isCommaListExpression(node: TS.Node, typescript: typeof TS): node is TS.CommaListExpression {
	return node.kind === typescript.SyntaxKind.CommaListExpression;
}
