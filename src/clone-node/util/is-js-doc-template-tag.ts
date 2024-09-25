import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocTemplateTag
 */
export function isJsDocTemplateTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocTemplateTag {
	// TypeScript 4.x
	if ("isJSDocTemplateTag" in typescript) {
		return typescript.isJSDocTemplateTag(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocTemplateTag;
}
