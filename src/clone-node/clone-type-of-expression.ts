import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTypeOfExpression(node: TS.TypeOfExpression, options: CloneNodeVisitorOptions<TS.TypeOfExpression>): TS.TypeOfExpression {
	return options.factory.createTypeOfExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
