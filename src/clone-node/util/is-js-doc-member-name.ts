import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocMemberName
 */
export function isJsDocMemberName(node: MetaNode, typescript: typeof TS): node is TS.JSDocMemberName {
	// TypeScript 4.x
	if ("isJSDocMemberName" in typescript) {
		return typescript.isJSDocMemberName(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocMemberName;
}
