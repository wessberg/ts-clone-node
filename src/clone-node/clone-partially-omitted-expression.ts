import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function clonePartiallyEmittedExpression(
	node: TS.PartiallyEmittedExpression,
	options: CloneNodeVisitorOptions<TS.PartiallyEmittedExpression>
): TS.PartiallyEmittedExpression {
	return options.factory.createPartiallyEmittedExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
