import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocReadonlyTag
 */
export function isJsDocReadonlyTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocReadonlyTag {
	// TypeScript 4.x
	if ("isJSDocReadonlyTag" in typescript) {
		return typescript.isJSDocReadonlyTag(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocReadonlyTag;
}
