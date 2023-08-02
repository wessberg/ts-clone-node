import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a ThisExpression
 */
export function isThisExpression(node: MetaNode, typescript: typeof TS): node is TS.ThisExpression {
	return node.kind === typescript.SyntaxKind.ThisKeyword;
}
