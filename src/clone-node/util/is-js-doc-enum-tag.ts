import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocEnumTag
 */
export function isJsDocEnumTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocEnumTag {
	// TypeScript 4.x
	if (("isJSDocEnumTag" in typescript) as never) {
		return typescript.isJSDocEnumTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocEnumTag;
}
