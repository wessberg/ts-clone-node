import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a ThisExpression
 */
export function isThisExpression(node: MetaNode, typescript: typeof TS): node is TS.ThisExpression {
	return node.kind === typescript.SyntaxKind.ThisKeyword;
}
