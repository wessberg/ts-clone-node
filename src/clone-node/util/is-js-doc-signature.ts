import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocSignature
 */
export function isJSDocSignature(node: MetaNode, typescript: typeof TS): node is TS.JSDocSignature {
	return node.kind === typescript.SyntaxKind.JSDocSignature;
}
