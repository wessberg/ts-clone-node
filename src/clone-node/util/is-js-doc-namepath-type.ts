import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocNamepathType
 */
export function isJSDocNamepathType(node: MetaNode, typescript: typeof TS): node is TS.JSDocNamepathType {
	return node.kind === typescript.SyntaxKind.JSDocNamepathType;
}
