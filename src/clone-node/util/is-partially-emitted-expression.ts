import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a PartiallyEmittedExpression
 */
export function isPartiallyEmittedExpression(node: MetaNode, typescript: typeof TS): node is TS.PartiallyEmittedExpression {
	// TypeScript 4.x
	if ("isPartiallyEmittedExpression" in typescript) {
		return typescript.isPartiallyEmittedExpression(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.PartiallyEmittedExpression;
}
