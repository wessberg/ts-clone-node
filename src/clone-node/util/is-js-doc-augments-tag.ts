import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocAugmentsTag
 */
export function isJSDocAugmentsTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocAugmentsTag {
	return node.kind === typescript.SyntaxKind.JSDocAugmentsTag;
}
