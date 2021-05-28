import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExpressionWithTypeArguments(
	node: TS.ExpressionWithTypeArguments,
	options: CloneNodeVisitorOptions<TS.ExpressionWithTypeArguments>
): TS.ExpressionWithTypeArguments {
	return options.factory.createExpressionWithTypeArguments(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments)
	);
}
