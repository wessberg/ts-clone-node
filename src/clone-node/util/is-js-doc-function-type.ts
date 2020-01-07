import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocFunctionType
 */
export function isJSDocFunctionType(node: MetaNode, typescript: typeof TS): node is TS.JSDocFunctionType {
	return node.kind === typescript.SyntaxKind.JSDocFunctionType;
}
