import {BooleanLiteral, Node, SyntaxKind} from "typescript";

export function isBooleanLiteral (node: Node): node is BooleanLiteral {
	switch (node.kind) {
		case SyntaxKind.TrueKeyword:
		case SyntaxKind.FalseKeyword:
			return true;
		default:
			return false;

	}
}