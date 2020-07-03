import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneArrayLiteralExpression(node: TS.ArrayLiteralExpression, options: CloneNodeVisitorOptions<TS.ArrayLiteralExpression>): TS.ArrayLiteralExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ArrayLiteralExpression, options: CloneNodeVisitorOptions<TS.ArrayLiteralExpression>): TS.ArrayLiteralExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createArrayLiteral(options.hook("elements", options.nextNodes(node.elements), node.elements) as never) as unknown) as TS.ArrayLiteralExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ArrayLiteralExpression, options: CloneNodeVisitorOptions<TS.ArrayLiteralExpression>): TS.ArrayLiteralExpression {
	return options.factory.createArrayLiteralExpression(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
