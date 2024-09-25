import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocAllType
 */
export function isJsDocAllType(node: MetaNode, typescript: typeof TS): node is TS.JSDocAllType {
	// TypeScript 4.x
	if ("isJSDocAllType" in typescript) {
		return typescript.isJSDocAllType(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocAllType;
}
