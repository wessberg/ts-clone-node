import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocLinkPlain
 */
export function isJsDocLinkPlain(node: MetaNode, typescript: typeof TS): node is TS.JSDocLinkPlain {
	// TypeScript 4.x
	if (("isJSDocLinkPlain" in typescript) as never) {
		return typescript.isJSDocLinkPlain(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocLinkPlain;
}
