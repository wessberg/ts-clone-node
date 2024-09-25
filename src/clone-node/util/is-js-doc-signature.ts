import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocSignature
 */
export function isJsDocSignature(node: MetaNode, typescript: typeof TS): node is TS.JSDocSignature {
	// TypeScript 4.x
	if ("isJSDocSignature" in typescript) {
		return typescript.isJSDocSignature(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocSignature;
}
