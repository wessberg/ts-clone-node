import {TS} from "../type/ts";

/**
 * Returns true if the given Node is a PartiallyEmittedExpression
 */
export function isPartiallyEmittedExpression(node: TS.Node, typescript: typeof TS): node is TS.PartiallyEmittedExpression {
	return node.kind === typescript.SyntaxKind.PartiallyEmittedExpression;
}
