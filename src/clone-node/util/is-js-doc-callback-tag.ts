import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocCallbackTag
 */
export function isJsDocCallbackTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocCallbackTag {
	// TypeScript 4.x
	if (("isJSDocCallbackTag" in typescript) as never) {
		return typescript.isJSDocCallbackTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocCallbackTag;
}
