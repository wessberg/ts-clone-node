import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocThisTag
 */
export function isJsDocThisTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocThisTag {
	// TypeScript 4.x
	if ("isJSDocThisTag" in typescript) {
		return typescript.isJSDocThisTag(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocThisTag;
}
