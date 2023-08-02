import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneExpressionWithTypeArguments(
	node: TS.ExpressionWithTypeArguments,
	options: CloneNodeVisitorOptions<TS.ExpressionWithTypeArguments>
): TS.ExpressionWithTypeArguments {
	return options.factory.createExpressionWithTypeArguments(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments)
	);
}
