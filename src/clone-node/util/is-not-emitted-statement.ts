import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a NotEmittedStatement
 */
export function isNotEmittedStatement(node: MetaNode, typescript: typeof TS): node is TS.NotEmittedStatement {
	// TypeScript 4.x
	if (("isNotEmittedStatement" in typescript) as never) {
		return typescript.isNotEmittedStatement(node);
	}
	return node.kind === typescript.SyntaxKind.NotEmittedStatement;
}
