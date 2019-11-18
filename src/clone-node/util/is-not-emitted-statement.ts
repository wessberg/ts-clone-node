import {TS} from "../type/ts";

/**
 * Returns true if the given Node is a NotEmittedStatement
 */
export function isNotEmittedStatement(node: TS.Node, typescript: typeof TS): node is TS.NotEmittedStatement {
	return node.kind === typescript.SyntaxKind.NotEmittedStatement;
}
