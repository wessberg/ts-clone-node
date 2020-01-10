import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneNonNullExpression(node: TS.NonNullExpression, options: CloneNodeVisitorOptions<TS.NonNullExpression>): TS.NonNullExpression {
	return options.typescript.createNonNullExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
