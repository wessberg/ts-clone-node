import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocOptionalType
 */
export function isJsDocOptionalType(node: MetaNode, typescript: typeof TS): node is TS.JSDocOptionalType {
	// TypeScript 4.x
	if ("isJSDocOptionalType" in typescript) {
		return typescript.isJSDocOptionalType(node);
	}
	return node.kind === (typescript as typeof TS).SyntaxKind.JSDocOptionalType;
}
