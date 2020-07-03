import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocTypeTag
 */
export function isJsDocTypeTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocTypeTag {
	// TypeScript 4.x
	if (("isJSDocTypeTag" in typescript) as never) {
		return typescript.isJSDocTypeTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocTypeTag;
}
