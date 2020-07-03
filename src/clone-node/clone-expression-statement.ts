import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExpressionStatement(node: TS.ExpressionStatement, options: CloneNodeVisitorOptions<TS.ExpressionStatement>): TS.ExpressionStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ExpressionStatement, options: CloneNodeVisitorOptions<TS.ExpressionStatement>): TS.ExpressionStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createExpressionStatement(options.hook("expression", options.nextNode(node.expression), node.expression) as never) as unknown) as TS.ExpressionStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ExpressionStatement, options: CloneNodeVisitorOptions<TS.ExpressionStatement>): TS.ExpressionStatement {
	return options.factory.createExpressionStatement(options.hook("expression", options.nextNode(node.expression), node.expression));
}
