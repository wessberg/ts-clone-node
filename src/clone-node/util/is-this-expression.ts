import {Node, SyntaxKind, ThisExpression} from "typescript";

export function isThisExpression (node: Node): node is ThisExpression {
	return node.kind === SyntaxKind.ThisKeyword;
}