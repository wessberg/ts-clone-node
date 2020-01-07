import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocTemplateTag
 */
export function isJSDocTemplateTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocTemplateTag {
	return node.kind === typescript.SyntaxKind.JSDocTemplateTag;
}
