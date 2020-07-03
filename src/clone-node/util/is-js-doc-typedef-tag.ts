import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocTypedefTag
 */
export function isJsDocTypedefTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocTypedefTag {
	// TypeScript 4.x
	if (("isJSDocTypedefTag" in typescript) as never) {
		return typescript.isJSDocTypedefTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocTypedefTag;
}
