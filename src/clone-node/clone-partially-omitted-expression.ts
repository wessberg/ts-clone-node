import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function clonePartiallyEmittedExpression(
	node: TS.PartiallyEmittedExpression,
	options: CloneNodeVisitorOptions<TS.PartiallyEmittedExpression>
): TS.PartiallyEmittedExpression {
	return options.factory.createPartiallyEmittedExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
