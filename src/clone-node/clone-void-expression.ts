import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneVoidExpression(node: TS.VoidExpression, options: CloneNodeVisitorOptions<TS.VoidExpression>): TS.VoidExpression {
	return options.factory.createVoidExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
