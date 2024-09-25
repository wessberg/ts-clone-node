import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocAugmentsTag
 */
export function isJsDocAugmentsTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocAugmentsTag {
	// TypeScript 4.x
	if ("isJSDocAugmentsTag" in typescript) {
		return typescript.isJSDocAugmentsTag(node);
	}

	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocAugmentsTag;
}
