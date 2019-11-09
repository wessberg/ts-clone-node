import {KeywordTypeNode, Node, SyntaxKind} from "typescript";

export function isKeywordTypeNode (node: Node): node is KeywordTypeNode {
	switch (node.kind) {
		case SyntaxKind.AnyKeyword:
		case SyntaxKind.UnknownKeyword:
		case SyntaxKind.BigIntKeyword:
		case SyntaxKind.ObjectKeyword:
		case SyntaxKind.BooleanKeyword:
		case SyntaxKind.StringKeyword:
		case SyntaxKind.SymbolKeyword:
		case SyntaxKind.VoidKeyword:
		case SyntaxKind.UndefinedKeyword:
		case SyntaxKind.NullKeyword:
		case SyntaxKind.NeverKeyword:
			return true;
	}
	return false;
}