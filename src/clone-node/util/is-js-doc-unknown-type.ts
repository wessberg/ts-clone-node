import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocUnknownType
 */
export function isJsDocUnknownType(node: MetaNode, typescript: typeof TS): node is TS.JSDocUnknownType {
	// TypeScript 4.x
	if (("isJSDocUnknownType" in typescript) as never) {
		return typescript.isJSDocUnknownType(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocUnknownType;
}
