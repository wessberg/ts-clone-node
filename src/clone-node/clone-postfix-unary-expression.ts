import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function clonePostfixUnaryExpression(node: TS.PostfixUnaryExpression, options: CloneNodeVisitorOptions<TS.PostfixUnaryExpression>): TS.PostfixUnaryExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.PostfixUnaryExpression, options: CloneNodeVisitorOptions<TS.PostfixUnaryExpression>): TS.PostfixUnaryExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createPostfix(
		options.hook("operand", options.nextNode(node.operand), node.operand) as never,
		options.hook("operator", node.operator, node.operator) as never
	) as unknown) as TS.PostfixUnaryExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.PostfixUnaryExpression, options: CloneNodeVisitorOptions<TS.PostfixUnaryExpression>): TS.PostfixUnaryExpression {
	return options.factory.createPostfixUnaryExpression(
		options.hook("operand", options.nextNode(node.operand), node.operand),
		options.hook("operator", node.operator, node.operator)
	);
}
