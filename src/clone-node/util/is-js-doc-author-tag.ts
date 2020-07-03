import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocAuthorTag
 */
export function isJsDocAuthorTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocAuthorTag {
	// TypeScript 4.x
	if (("isJSDocAuthorTag" in typescript) as never) {
		return typescript.isJSDocAuthorTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocAuthorTag;
}
