import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocParameterTag
 */
export function isJsDocParameterTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocParameterTag {
	// TypeScript 4.x
	if (("isJSDocParameterTag" in typescript) as never) {
		return typescript.isJSDocParameterTag(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocParameterTag;
}
