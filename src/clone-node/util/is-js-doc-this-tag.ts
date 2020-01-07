import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocThisTag
 */
export function isJSDocThisTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocThisTag {
	return node.kind === typescript.SyntaxKind.JSDocThisTag;
}
