import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneWhileStatement(node: TS.WhileStatement, options: CloneNodeVisitorOptions<TS.WhileStatement>): TS.WhileStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.WhileStatement, options: CloneNodeVisitorOptions<TS.WhileStatement>): TS.WhileStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createWhile(
		options.hook("expression", options.nextNode(node.expression), node.expression) as never,
		options.hook("statement", options.nextNode(node.statement), node.statement) as never
	) as unknown) as TS.WhileStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.WhileStatement, options: CloneNodeVisitorOptions<TS.WhileStatement>): TS.WhileStatement {
	return options.factory.createWhileStatement(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
