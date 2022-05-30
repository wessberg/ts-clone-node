import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocAugmentsTag
 */
export function isJsDocAugmentsTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocAugmentsTag {
	// TypeScript 4.x
	if (("isJSDocAugmentsTag" in typescript) as never) {
		return typescript.isJSDocAugmentsTag(node);
	}

	return node.kind === typescript.SyntaxKind.JSDocAugmentsTag;
}
