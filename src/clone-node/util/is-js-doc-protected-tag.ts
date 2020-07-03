import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocProtectedTag
 */
export function isJsDocProtectedTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocProtectedTag {
	// TypeScript 4.x
	if (("isJSDocProtectedTag" in typescript) as never) {
		return typescript.isJSDocProtectedTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocProtectedTag;
}
