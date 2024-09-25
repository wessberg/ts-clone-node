import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocImportTag
 */
export function isJsDocImportTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocImportTag {
	// TypeScript 5.x
	if ("isJSDocImportTag" in typescript) {
		return typescript.isJSDocImportTag(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocImportTag;
}
