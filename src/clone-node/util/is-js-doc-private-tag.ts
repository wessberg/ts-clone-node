import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocPrivateTag
 */
export function isJsDocPrivateTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocPrivateTag {
	// TypeScript 4.x
	if ("isJSDocPrivateTag" in typescript) {
		return typescript.isJSDocPrivateTag(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocPrivateTag;
}
