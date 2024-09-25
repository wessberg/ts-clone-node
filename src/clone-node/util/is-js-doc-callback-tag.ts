import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocCallbackTag
 */
export function isJsDocCallbackTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocCallbackTag {
	// TypeScript 4.x
	if ("isJSDocCallbackTag" in typescript) {
		return typescript.isJSDocCallbackTag(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocCallbackTag;
}
