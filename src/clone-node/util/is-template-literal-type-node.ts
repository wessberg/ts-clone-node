import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a TemplateLiteralTypeNode
 */
export function isTemplateLiteralTypeNode(node: MetaNode, typescript: typeof TS): node is TS.TemplateLiteralTypeNode {
	return typescript.SyntaxKind.TemplateLiteralType != null && node.kind === typescript.SyntaxKind.TemplateLiteralType;
}
