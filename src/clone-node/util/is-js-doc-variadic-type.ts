import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocVariadicType
 */
export function isJSDocVariadicType(node: MetaNode, typescript: typeof TS): node is TS.JSDocVariadicType {
	return node.kind === typescript.SyntaxKind.JSDocVariadicType;
}
