import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneVoidExpression(node: TS.VoidExpression, options: CloneNodeVisitorOptions<TS.VoidExpression>): TS.VoidExpression {
	return options.factory.createVoidExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
