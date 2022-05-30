import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocLink
 */
export function isJsDocLink(node: MetaNode, typescript: typeof TS): node is TS.JSDocLink {
	// TypeScript 4.x
	if (("isJSDocLink" in typescript) as never) {
		return typescript.isJSDocLink(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocLink;
}
