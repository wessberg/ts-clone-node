import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocOptionalType
 */
export function isJSDocOptionalType(node: MetaNode, typescript: typeof TS): node is TS.JSDocOptionalType {
	return node.kind === typescript.SyntaxKind.JSDocOptionalType;
}
