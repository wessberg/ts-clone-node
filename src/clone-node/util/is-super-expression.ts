import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

export function isSuperExpression(node: MetaNode, typescript: typeof TS): node is TS.SuperExpression {
	return node.kind === typescript.SyntaxKind.SuperKeyword;
}
