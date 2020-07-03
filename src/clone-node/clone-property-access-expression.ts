import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function clonePropertyAccessExpression(node: TS.PropertyAccessExpression, options: CloneNodeVisitorOptions<TS.PropertyAccessExpression>): TS.PropertyAccessExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.PropertyAccessExpression, options: CloneNodeVisitorOptions<TS.PropertyAccessExpression>): TS.PropertyAccessExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createPropertyAccess(
		options.hook("expression", options.nextNode(node.expression), node.expression) as never,
		options.hook("name", options.nextNode(node.name), node.name) as never
	) as unknown) as TS.PropertyAccessExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.PropertyAccessExpression, options: CloneNodeVisitorOptions<TS.PropertyAccessExpression>): TS.PropertyAccessExpression {
	return options.factory.createPropertyAccessExpression(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("name", options.nextNode(node.name), node.name)
	);
}
