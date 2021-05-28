import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneDeleteExpression(node: TS.DeleteExpression, options: CloneNodeVisitorOptions<TS.DeleteExpression>): TS.DeleteExpression {
	return options.factory.createDeleteExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
