import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneCommaListExpression(node: TS.CommaListExpression, options: CloneNodeVisitorOptions<TS.CommaListExpression>): TS.CommaListExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.CommaListExpression, options: CloneNodeVisitorOptions<TS.CommaListExpression>): TS.CommaListExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createCommaList(options.hook("elements", options.nextNodes(node.elements), node.elements) as never) as unknown) as TS.CommaListExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.CommaListExpression, options: CloneNodeVisitorOptions<TS.CommaListExpression>): TS.CommaListExpression {
	return options.factory.createCommaListExpression(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
