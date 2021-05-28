import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneParenthesizedExpression(node: TS.ParenthesizedExpression, options: CloneNodeVisitorOptions<TS.ParenthesizedExpression>): TS.ParenthesizedExpression {
	return options.factory.createParenthesizedExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
