import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is the literal 'null'
 */
export function isNullLiteral(node: MetaNode, typescript: typeof TS): node is TS.NullLiteral {
	return node.kind === typescript.SyntaxKind.NullKeyword;
}
