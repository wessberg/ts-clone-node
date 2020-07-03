import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTypeOfExpression(node: TS.TypeOfExpression, options: CloneNodeVisitorOptions<TS.TypeOfExpression>): TS.TypeOfExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.TypeOfExpression, options: CloneNodeVisitorOptions<TS.TypeOfExpression>): TS.TypeOfExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createTypeOf(options.hook("expression", options.nextNode(node.expression), node.expression) as never) as unknown) as TS.TypeOfExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.TypeOfExpression, options: CloneNodeVisitorOptions<TS.TypeOfExpression>): TS.TypeOfExpression {
	return options.factory.createTypeOfExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
