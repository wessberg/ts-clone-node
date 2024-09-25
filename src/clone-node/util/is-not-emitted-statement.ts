import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a NotEmittedStatement
 */
export function isNotEmittedStatement(node: MetaNode, typescript: typeof TS): node is TS.NotEmittedStatement {
	// TypeScript 4.x
	if ("isNotEmittedStatement" in typescript) {
		return typescript.isNotEmittedStatement(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.NotEmittedStatement;
}
