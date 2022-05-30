import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneYieldExpression(node: TS.YieldExpression, options: CloneNodeVisitorOptions<TS.YieldExpression>): TS.YieldExpression {
	return options.factory.createYieldExpression(
		options.hook("asteriskToken", options.nextNode(node.asteriskToken), node.asteriskToken)!,
		options.hook("expression", options.nextNode(node.expression), node.expression)!
	);
}
