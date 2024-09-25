import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocPublicTag
 */
export function isJsDocPublicTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocPublicTag {
	// TypeScript 4.x
	if ("isJSDocPublicTag" in typescript) {
		return typescript.isJSDocPublicTag(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocPublicTag;
}
