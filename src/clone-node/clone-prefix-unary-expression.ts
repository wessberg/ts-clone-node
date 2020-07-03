import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function clonePrefixUnaryExpression(node: TS.PrefixUnaryExpression, options: CloneNodeVisitorOptions<TS.PrefixUnaryExpression>): TS.PrefixUnaryExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.PrefixUnaryExpression, options: CloneNodeVisitorOptions<TS.PrefixUnaryExpression>): TS.PrefixUnaryExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createPrefix(
		options.hook("operator", node.operator, node.operator) as never,
		options.hook("operand", options.nextNode(node.operand), node.operand) as never
	) as unknown) as TS.PrefixUnaryExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.PrefixUnaryExpression, options: CloneNodeVisitorOptions<TS.PrefixUnaryExpression>): TS.PrefixUnaryExpression {
	return options.factory.createPrefixUnaryExpression(options.hook("operator", node.operator, node.operator), options.hook("operand", options.nextNode(node.operand), node.operand));
}
