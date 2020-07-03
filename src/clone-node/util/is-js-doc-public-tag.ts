import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocPublicTag
 */
export function isJsDocPublicTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocPublicTag {
	// TypeScript 4.x
	if (("isJSDocPublicTag" in typescript) as never) {
		return typescript.isJSDocPublicTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocPublicTag;
}
