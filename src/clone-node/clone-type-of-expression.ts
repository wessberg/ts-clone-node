import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTypeOfExpression(node: TS.TypeOfExpression, options: CloneNodeVisitorOptions<TS.TypeOfExpression>): TS.TypeOfExpression {
	return options.typescript.createTypeOf(options.hook("expression", options.nextNode(node.expression), node.expression));
}
