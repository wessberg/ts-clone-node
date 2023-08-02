import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocOverloadTag
 */
export function isJsDocOverloadTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocOverloadTag {
	// TypeScript 5.x
	if (("isJSDocOverloadTag" in typescript) as never) {
		return typescript.isJSDocOverloadTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocOverloadTag;
}
