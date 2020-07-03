import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocThisTag
 */
export function isJsDocThisTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocThisTag {
	// TypeScript 4.x
	if (("isJSDocThisTag" in typescript) as never) {
		return typescript.isJSDocThisTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocThisTag;
}
