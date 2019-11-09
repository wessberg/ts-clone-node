import {CommaListExpression, Node, SyntaxKind} from "typescript";

export function isCommaListExpression (node: Node): node is CommaListExpression {
	return node.kind === SyntaxKind.CommaListExpression;
}