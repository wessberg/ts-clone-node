import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocTypeLiteral
 */
export function isJsDocTypeLiteral(node: MetaNode, typescript: typeof TS): node is TS.JSDocTypeLiteral {
	return node.kind === typescript.SyntaxKind.JSDocTypeLiteral;
}
