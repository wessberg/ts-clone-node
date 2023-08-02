import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocUnknownTag
 */
export function isJsDocUnknownTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocUnknownTag {
	// TypeScript 4.x
	if (("isJSDocUnknownTag" in typescript) as never) {
		return typescript.isJSDocUnknownTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocTag;
}
