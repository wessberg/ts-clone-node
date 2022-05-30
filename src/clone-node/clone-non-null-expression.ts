import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneNonNullExpression(node: TS.NonNullExpression, options: CloneNodeVisitorOptions<TS.NonNullExpression>): TS.NonNullExpression {
	return options.factory.createNonNullExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
