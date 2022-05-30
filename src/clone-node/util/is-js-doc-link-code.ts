import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocLinkCode
 */
export function isJsDocLinkCode(node: MetaNode, typescript: typeof TS): node is TS.JSDocLinkCode {
	// TypeScript 4.x
	if (("isJSDocLinkCode" in typescript) as never) {
		return typescript.isJSDocLinkCode(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocLinkCode;
}
