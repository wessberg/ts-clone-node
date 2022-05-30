import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function clonePostfixUnaryExpression(node: TS.PostfixUnaryExpression, options: CloneNodeVisitorOptions<TS.PostfixUnaryExpression>): TS.PostfixUnaryExpression {
	return options.factory.createPostfixUnaryExpression(
		options.hook("operand", options.nextNode(node.operand), node.operand),
		options.hook("operator", node.operator, node.operator)
	);
}
