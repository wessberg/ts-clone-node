import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneYieldExpression(node: TS.YieldExpression, options: CloneNodeVisitorOptions<TS.YieldExpression>): TS.YieldExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.YieldExpression, options: CloneNodeVisitorOptions<TS.YieldExpression>): TS.YieldExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createYield(
		options.hook("asteriskToken", options.nextNode(node.asteriskToken), node.asteriskToken) as never,
		options.hook("expression", options.nextNode(node.expression), node.expression)! as never
	) as unknown) as TS.YieldExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.YieldExpression, options: CloneNodeVisitorOptions<TS.YieldExpression>): TS.YieldExpression {
	return options.factory.createYieldExpression(
		options.hook("asteriskToken", options.nextNode(node.asteriskToken), node.asteriskToken)!,
		options.hook("expression", options.nextNode(node.expression), node.expression)!
	);
}
