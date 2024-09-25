import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocDeprecatedTag
 */
export function isJsDocDeprecatedTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocDeprecatedTag {
	// TypeScript 4.x
	if ("JSDocDeprecatedTag" in typescript) {
		return typescript.isJSDocDeprecatedTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocDeprecatedTag;
}
