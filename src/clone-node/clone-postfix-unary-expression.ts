import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function clonePostfixUnaryExpression(
	node: TS.PostfixUnaryExpression,
	options: CloneNodeVisitorOptions<TS.PostfixUnaryExpression>
): TS.PostfixUnaryExpression {
	return options.typescript.createPostfix(
		options.hook("operand", options.nextNode(node.operand), node.operand),
		options.hook("operator", node.operator, node.operator)
	);
}
