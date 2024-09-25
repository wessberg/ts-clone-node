import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a TemplateLiteralTypeNode
 */
export function isTemplateLiteralTypeNode(node: MetaNode, typescript: typeof TS): node is TS.TemplateLiteralTypeNode {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	return (typescript.SyntaxKind as {TemplateLiteralType?: number}).TemplateLiteralType != null && node.kind === typescript.SyntaxKind.TemplateLiteralType;
}
