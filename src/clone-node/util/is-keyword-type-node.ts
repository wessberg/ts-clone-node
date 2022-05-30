import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a KeywordTypeNode
 */
export function isKeywordTypeNode(node: MetaNode, typescript: typeof TS): node is TS.KeywordTypeNode {
	switch (node.kind) {
		case typescript.SyntaxKind.AnyKeyword:
		case typescript.SyntaxKind.UnknownKeyword:
		case typescript.SyntaxKind.BigIntKeyword:
		case typescript.SyntaxKind.ObjectKeyword:
		case typescript.SyntaxKind.BooleanKeyword:
		case typescript.SyntaxKind.StringKeyword:
		case typescript.SyntaxKind.SymbolKeyword:
		case typescript.SyntaxKind.VoidKeyword:
		case typescript.SyntaxKind.UndefinedKeyword:
		case typescript.SyntaxKind.NullKeyword:
		case typescript.SyntaxKind.NeverKeyword:
			return true;
	}
	return false;
}
