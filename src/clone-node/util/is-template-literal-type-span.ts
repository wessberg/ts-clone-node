import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a TemplateLiteralTypeSpan
 */
export function isTemplateLiteralTypeSpan(node: MetaNode, typescript: typeof TS): node is TS.TemplateLiteralTypeSpan {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	return (typescript.SyntaxKind as {TemplateLiteralTypeSpan?: number}).TemplateLiteralTypeSpan != null && node.kind === typescript.SyntaxKind.TemplateLiteralTypeSpan;
}
