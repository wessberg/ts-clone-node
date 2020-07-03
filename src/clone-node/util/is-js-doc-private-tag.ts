import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocPrivateTag
 */
export function isJsDocPrivateTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocPrivateTag {
	// TypeScript 4.x
	if (("isJSDocPrivateTag" in typescript) as never) {
		return typescript.isJSDocPrivateTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocPrivateTag;
}
