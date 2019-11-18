import {TS} from "../type/ts";

/**
 * Returns true if the given Node is either the boolean Literal 'true' or 'false'
 */
export function isBooleanLiteral(node: TS.Node, typescript: typeof TS): node is TS.BooleanLiteral {
	switch (node.kind) {
		case typescript.SyntaxKind.TrueKeyword:
		case typescript.SyntaxKind.FalseKeyword:
			return true;
		default:
			return false;
	}
}
