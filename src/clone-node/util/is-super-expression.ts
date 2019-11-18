import {TS} from "../type/ts";

export function isSuperExpression(node: TS.Node, typescript: typeof TS): node is TS.SuperExpression {
	return node.kind === typescript.SyntaxKind.SuperKeyword;
}
