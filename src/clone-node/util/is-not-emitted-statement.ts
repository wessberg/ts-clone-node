import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a NotEmittedStatement
 */
export function isNotEmittedStatement(node: MetaNode, typescript: typeof TS): node is TS.NotEmittedStatement {
	return node.kind === typescript.SyntaxKind.NotEmittedStatement;
}
