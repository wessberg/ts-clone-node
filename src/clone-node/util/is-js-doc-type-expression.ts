import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocTypeExpression
 */
export function isJsDocTypeExpression(node: MetaNode, typescript: typeof TS): node is TS.JSDocTypeExpression {
	return node.kind === typescript.SyntaxKind.JSDocTypeExpression;
}
