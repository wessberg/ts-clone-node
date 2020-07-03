import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

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
