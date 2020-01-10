import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneYieldExpression(node: TS.YieldExpression, options: CloneNodeVisitorOptions<TS.YieldExpression>): TS.YieldExpression {
	return options.typescript.createYield(
		options.hook("asteriskToken", options.nextNode(node.asteriskToken), node.asteriskToken),
		options.hook("expression", options.nextNode(node.expression), node.expression)!
	);
}
