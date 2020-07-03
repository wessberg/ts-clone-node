import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocClassTag
 */
export function isJsDocClassTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocClassTag {
	// TypeScript 4.x
	if (("isJSDocClassTag" in typescript) as never) {
		return typescript.isJSDocClassTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocClassTag;
}
