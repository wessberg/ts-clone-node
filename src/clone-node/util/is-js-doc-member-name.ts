import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocMemberName
 */
export function isJsDocMemberName(node: MetaNode, typescript: typeof TS): node is TS.JSDocMemberName {
	// TypeScript 4.x
	if (("isJSDocMemberName" in typescript) as never) {
		return typescript.isJSDocMemberName(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocMemberName;
}
