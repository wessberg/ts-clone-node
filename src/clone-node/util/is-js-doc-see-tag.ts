import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocSeeTag
 */
export function isJsDocSeeTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocSeeTag {
	// TypeScript 4.x
	if (("isJSDocSeeTag" in typescript) as never) {
		return typescript.isJSDocSeeTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocSeeTag;
}
