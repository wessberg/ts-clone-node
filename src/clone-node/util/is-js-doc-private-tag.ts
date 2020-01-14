import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocPrivateTag
 */
export function isJSDocPrivateTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocPrivateTag {
	return node.kind === typescript.SyntaxKind.JSDocPrivateTag;
}
