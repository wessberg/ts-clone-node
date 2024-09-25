import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocVariadicType
 */
export function isJsDocVariadicType(node: MetaNode, typescript: typeof TS): node is TS.JSDocVariadicType {
	// TypeScript 4.x
	if ("isJSDocVariadicType" in typescript) {
		return typescript.isJSDocVariadicType(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocVariadicType;
}
