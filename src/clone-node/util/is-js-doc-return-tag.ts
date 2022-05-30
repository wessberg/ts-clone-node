import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocReturnTag
 */
export function isJsDocReturnTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocReturnTag {
	// TypeScript 4.x
	if (("isJSDocReturnTag" in typescript) as never) {
		return typescript.isJSDocReturnTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocReturnTag;
}
