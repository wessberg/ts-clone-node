import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExpressionWithTypeArguments(
	node: TS.ExpressionWithTypeArguments,
	options: CloneNodeVisitorOptions<TS.ExpressionWithTypeArguments>
): TS.ExpressionWithTypeArguments {
	return options.typescript.createExpressionWithTypeArguments(
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("expression", options.nextNode(node.expression), node.expression)
	);
}
