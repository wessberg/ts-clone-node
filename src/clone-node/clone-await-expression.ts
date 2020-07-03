import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneAwaitExpression(node: TS.AwaitExpression, options: CloneNodeVisitorOptions<TS.AwaitExpression>): TS.AwaitExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.AwaitExpression, options: CloneNodeVisitorOptions<TS.AwaitExpression>): TS.AwaitExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createAwait(options.hook("expression", options.nextNode(node.expression), node.expression) as never) as unknown) as TS.AwaitExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.AwaitExpression, options: CloneNodeVisitorOptions<TS.AwaitExpression>): TS.AwaitExpression {
	return options.factory.createAwaitExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
