import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneNewExpression(node: TS.NewExpression, options: CloneNodeVisitorOptions<TS.NewExpression>): TS.NewExpression {
	return options.factory.createNewExpression(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("arguments", options.nextNodes(node.arguments), node.arguments)
	);
}
