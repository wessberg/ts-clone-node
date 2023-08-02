import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocThrowsTag
 */
export function isJsDocThrowsTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocThrowsTag {
	// TypeScript 5.x
	if (("isJSDocThrowsTag" in typescript) as never) {
		return typescript.isJSDocThrowsTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocThrowsTag;
}
