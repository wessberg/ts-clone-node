import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneDeleteExpression(node: TS.DeleteExpression, options: CloneNodeVisitorOptions<TS.DeleteExpression>): TS.DeleteExpression {
	return options.factory.createDeleteExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
