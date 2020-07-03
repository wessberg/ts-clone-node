import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneForStatement(node: TS.ForStatement, options: CloneNodeVisitorOptions<TS.ForStatement>): TS.ForStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ForStatement, options: CloneNodeVisitorOptions<TS.ForStatement>): TS.ForStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createFor(
		options.hook("initializer", options.nextNode(node.initializer), node.initializer) as never,
		options.hook("condition", options.nextNode(node.condition), node.condition) as never,
		options.hook("incrementor", options.nextNode(node.incrementor), node.incrementor) as never,
		options.hook("statement", options.nextNode(node.statement), node.statement) as never
	) as unknown) as TS.ForStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ForStatement, options: CloneNodeVisitorOptions<TS.ForStatement>): TS.ForStatement {
	return options.factory.createForStatement(
		options.hook("initializer", options.nextNode(node.initializer), node.initializer),
		options.hook("condition", options.nextNode(node.condition), node.condition),
		options.hook("incrementor", options.nextNode(node.incrementor), node.incrementor),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
