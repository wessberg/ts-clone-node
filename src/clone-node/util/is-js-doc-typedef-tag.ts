import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocTypedefTag
 */
export function isJsDocTypedefTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocTypedefTag {
	// TypeScript 4.x
	if ("isJSDocTypedefTag" in typescript) {
		return typescript.isJSDocTypedefTag(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocTypedefTag;
}
