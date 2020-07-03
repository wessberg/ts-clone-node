import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneForInStatement(node: TS.ForInStatement, options: CloneNodeVisitorOptions<TS.ForInStatement>): TS.ForInStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ForInStatement, options: CloneNodeVisitorOptions<TS.ForInStatement>): TS.ForInStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createForIn(
		options.hook("initializer", options.nextNode(node.initializer), node.initializer) as never,
		options.hook("expression", options.nextNode(node.expression), node.expression) as never,
		options.hook("statement", options.nextNode(node.statement), node.statement) as never
	) as unknown) as TS.ForInStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ForInStatement, options: CloneNodeVisitorOptions<TS.ForInStatement>): TS.ForInStatement {
	return options.factory.createForInStatement(
		options.hook("initializer", options.nextNode(node.initializer), node.initializer),
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
