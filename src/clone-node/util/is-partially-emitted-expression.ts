import {Node, PartiallyEmittedExpression, SyntaxKind} from "typescript";

export function isPartiallyEmittedExpression (node: Node): node is PartiallyEmittedExpression {
	return node.kind === SyntaxKind.PartiallyEmittedExpression;
}