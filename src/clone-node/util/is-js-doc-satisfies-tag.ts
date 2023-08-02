import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocSatisfiesTag
 */
export function isJsDocSatisfiesTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocSatisfiesTag {
	// TypeScript 5.x
	if (("isJSDocSatisfiesTag" in typescript) as never) {
		return typescript.isJSDocSatisfiesTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocSatisfiesTag;
}
