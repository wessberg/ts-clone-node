import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function clonePropertyAccessExpression(node: TS.PropertyAccessExpression, options: CloneNodeVisitorOptions<TS.PropertyAccessExpression>): TS.PropertyAccessExpression {
	return options.factory.createPropertyAccessExpression(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("name", options.nextNode(node.name), node.name)
	);
}
