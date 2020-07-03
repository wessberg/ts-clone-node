import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneParenthesizedExpression(node: TS.ParenthesizedExpression, options: CloneNodeVisitorOptions<TS.ParenthesizedExpression>): TS.ParenthesizedExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ParenthesizedExpression, options: CloneNodeVisitorOptions<TS.ParenthesizedExpression>): TS.ParenthesizedExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createParen(options.hook("expression", options.nextNode(node.expression), node.expression) as never) as unknown) as TS.ParenthesizedExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ParenthesizedExpression, options: CloneNodeVisitorOptions<TS.ParenthesizedExpression>): TS.ParenthesizedExpression {
	return options.factory.createParenthesizedExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
