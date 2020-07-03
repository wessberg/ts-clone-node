import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneDeleteExpression(node: TS.DeleteExpression, options: CloneNodeVisitorOptions<TS.DeleteExpression>): TS.DeleteExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.DeleteExpression, options: CloneNodeVisitorOptions<TS.DeleteExpression>): TS.DeleteExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createDelete(options.hook("expression", options.nextNode(node.expression), node.expression) as never) as unknown) as TS.DeleteExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.DeleteExpression, options: CloneNodeVisitorOptions<TS.DeleteExpression>): TS.DeleteExpression {
	return options.factory.createDeleteExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
