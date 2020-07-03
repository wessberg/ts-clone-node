import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocSignature
 */
export function isJsDocSignature(node: MetaNode, typescript: typeof TS): node is TS.JSDocSignature {
	// TypeScript 4.x
	if (("isJSDocSignature" in typescript) as never) {
		return typescript.isJSDocSignature(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocSignature;
}
