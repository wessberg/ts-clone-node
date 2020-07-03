import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a PartiallyEmittedExpression
 */
export function isPartiallyEmittedExpression(node: MetaNode, typescript: typeof TS): node is TS.PartiallyEmittedExpression {
	// TypeScript 4.x
	if (("isPartiallyEmittedExpression" in typescript) as never) {
		return typescript.isPartiallyEmittedExpression(node);
	}
	return node.kind === typescript.SyntaxKind.PartiallyEmittedExpression;
}
