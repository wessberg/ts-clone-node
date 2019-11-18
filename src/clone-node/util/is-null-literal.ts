import {TS} from "../type/ts";

/**
 * Returns true if the given Node is the literal 'null'
 */
export function isNullLiteral(node: TS.Node, typescript: typeof TS): node is TS.NullLiteral {
	return node.kind === typescript.SyntaxKind.NullKeyword;
}
