import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a CommaListExpression
 */
export function isCommaListExpression(node: MetaNode, typescript: typeof TS): node is TS.CommaListExpression {
	// TypeScript 4.x
	if ("isCommaListExpression" in typescript) {
		return typescript.isCommaListExpression(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.CommaListExpression;
}
