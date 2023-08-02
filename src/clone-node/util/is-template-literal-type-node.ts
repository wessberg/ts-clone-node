import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a TemplateLiteralTypeNode
 */
export function isTemplateLiteralTypeNode(node: MetaNode, typescript: typeof TS): node is TS.TemplateLiteralTypeNode {
	return typescript.SyntaxKind.TemplateLiteralType != null && node.kind === typescript.SyntaxKind.TemplateLiteralType;
}
