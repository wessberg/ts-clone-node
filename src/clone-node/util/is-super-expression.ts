import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

export function isSuperExpression(node: MetaNode, typescript: typeof TS): node is TS.SuperExpression {
	return node.kind === typescript.SyntaxKind.SuperKeyword;
}
