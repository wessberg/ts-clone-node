import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a PartiallyEmittedExpression
 */
export function isPartiallyEmittedExpression(node: MetaNode, typescript: typeof TS): node is TS.PartiallyEmittedExpression {
	return node.kind === typescript.SyntaxKind.PartiallyEmittedExpression;
}
