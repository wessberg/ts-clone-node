import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

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
