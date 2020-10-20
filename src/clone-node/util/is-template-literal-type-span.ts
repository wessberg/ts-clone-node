import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a TemplateLiteralTypeSpan
 */
export function isTemplateLiteralTypeSpan(node: MetaNode, typescript: typeof TS): node is TS.TemplateLiteralTypeSpan {
	return typescript.SyntaxKind.TemplateLiteralTypeSpan != null && node.kind === typescript.SyntaxKind.TemplateLiteralTypeSpan;
}
