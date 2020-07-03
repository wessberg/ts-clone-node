import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneVoidExpression(node: TS.VoidExpression, options: CloneNodeVisitorOptions<TS.VoidExpression>): TS.VoidExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.VoidExpression, options: CloneNodeVisitorOptions<TS.VoidExpression>): TS.VoidExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createVoid(options.hook("expression", options.nextNode(node.expression), node.expression) as never) as unknown) as TS.VoidExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.VoidExpression, options: CloneNodeVisitorOptions<TS.VoidExpression>): TS.VoidExpression {
	return options.factory.createVoidExpression(options.hook("expression", options.nextNode(node.expression), node.expression));
}
