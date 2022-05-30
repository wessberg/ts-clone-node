import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneAwaitExpression(node: TS.AwaitExpression, options: CloneNodeVisitorOptions<TS.AwaitExpression>): TS.AwaitExpression {
	return options.factory.createAwaitExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
