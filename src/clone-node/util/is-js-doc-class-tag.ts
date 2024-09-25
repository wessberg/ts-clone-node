import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocClassTag
 */
export function isJsDocClassTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocClassTag {
	// TypeScript 4.x
	if ("isJSDocClassTag" in typescript) {
		return typescript.isJSDocClassTag(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocClassTag;
}
