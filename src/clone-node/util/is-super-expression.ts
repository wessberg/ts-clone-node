import {Node, SuperExpression, SyntaxKind} from "typescript";

export function isSuperExpression (node: Node): node is SuperExpression {
	return node.kind === SyntaxKind.SuperKeyword;
}