import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocProtectedTag
 */
export function isJsDocProtectedTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocProtectedTag {
	// TypeScript 4.x
	if ("isJSDocProtectedTag" in typescript) {
		return typescript.isJSDocProtectedTag(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocProtectedTag;
}
