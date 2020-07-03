import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneNewExpression(node: TS.NewExpression, options: CloneNodeVisitorOptions<TS.NewExpression>): TS.NewExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.NewExpression, options: CloneNodeVisitorOptions<TS.NewExpression>): TS.NewExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createNew(
		options.hook("expression", options.nextNode(node.expression), node.expression) as never,
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments) as never,
		options.hook("arguments", options.nextNodes(node.arguments), node.arguments) as never
	) as unknown) as TS.NewExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.NewExpression, options: CloneNodeVisitorOptions<TS.NewExpression>): TS.NewExpression {
	return options.factory.createNewExpression(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("arguments", options.nextNodes(node.arguments), node.arguments)
	);
}
