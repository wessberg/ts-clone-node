import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneElementAccessExpression(node: TS.ElementAccessExpression, options: CloneNodeVisitorOptions<TS.ElementAccessExpression>): TS.ElementAccessExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ElementAccessExpression, options: CloneNodeVisitorOptions<TS.ElementAccessExpression>): TS.ElementAccessExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createElementAccess(
		options.hook("expression", options.nextNode(node.expression), node.expression) as never,
		options.hook("argumentExpression", options.nextNode(node.argumentExpression), node.argumentExpression) as never
	) as unknown) as TS.ElementAccessExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ElementAccessExpression, options: CloneNodeVisitorOptions<TS.ElementAccessExpression>): TS.ElementAccessExpression {
	return options.factory.createElementAccessExpression(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("argumentExpression", options.nextNode(node.argumentExpression), node.argumentExpression)
	);
}
