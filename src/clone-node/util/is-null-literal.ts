import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is the literal 'null'
 */
export function isNullLiteral(node: MetaNode, typescript: typeof TS): node is TS.NullLiteral {
	return node.kind === typescript.SyntaxKind.NullKeyword;
}
