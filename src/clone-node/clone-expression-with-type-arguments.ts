import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExpressionWithTypeArguments(
	node: TS.ExpressionWithTypeArguments,
	options: CloneNodeVisitorOptions<TS.ExpressionWithTypeArguments>
): TS.ExpressionWithTypeArguments {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ExpressionWithTypeArguments, options: CloneNodeVisitorOptions<TS.ExpressionWithTypeArguments>): TS.ExpressionWithTypeArguments {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createExpressionWithTypeArguments(
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments) as never,
		options.hook("expression", options.nextNode(node.expression), node.expression) as never
	) as unknown) as TS.ExpressionWithTypeArguments;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ExpressionWithTypeArguments, options: CloneNodeVisitorOptions<TS.ExpressionWithTypeArguments>): TS.ExpressionWithTypeArguments {
	return options.factory.createExpressionWithTypeArguments(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments)
	);
}
