import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneElementAccessExpression(node: TS.ElementAccessExpression, options: CloneNodeVisitorOptions<TS.ElementAccessExpression>): TS.ElementAccessExpression {
	return options.factory.createElementAccessExpression(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("argumentExpression", options.nextNode(node.argumentExpression), node.argumentExpression)
	);
}
