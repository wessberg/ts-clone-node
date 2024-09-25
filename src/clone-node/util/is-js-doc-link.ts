import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocLink
 */
export function isJsDocLink(node: MetaNode, typescript: typeof TS): node is TS.JSDocLink {
	// TypeScript 4.x
	if ("isJSDocLink" in typescript) {
		return typescript.isJSDocLink(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocLink;
}
