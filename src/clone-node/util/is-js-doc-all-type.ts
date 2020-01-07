import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocAllType
 */
export function isJsDocAllType(node: MetaNode, typescript: typeof TS): node is TS.JSDocAllType {
	return node.kind === typescript.SyntaxKind.JSDocAllType;
}
