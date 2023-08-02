import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

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
