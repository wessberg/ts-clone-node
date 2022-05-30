import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocPropertyTag
 */
export function isJsDocPropertyTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocPropertyTag {
	// TypeScript 4.x
	if (("isJSDocPropertyTag" in typescript) as never) {
		return typescript.isJSDocPropertyTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocPropertyTag;
}
