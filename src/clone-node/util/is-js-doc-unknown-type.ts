import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocUnknownType
 */
export function isJsDocUnknownType(node: MetaNode, typescript: typeof TS): node is TS.JSDocUnknownType {
	// TypeScript 4.x
	if ("isJSDocUnknownType" in typescript) {
		return typescript.isJSDocUnknownType(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocUnknownType;
}
