import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocTypeTag
 */
export function isJsDocTypeTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocTypeTag {
	// TypeScript 4.x
	if ("isJSDocTypeTag" in typescript) {
		return typescript.isJSDocTypeTag(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocTypeTag;
}
