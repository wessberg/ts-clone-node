import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneForOfStatement(node: TS.ForOfStatement, options: CloneNodeVisitorOptions<TS.ForOfStatement>): TS.ForOfStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ForOfStatement, options: CloneNodeVisitorOptions<TS.ForOfStatement>): TS.ForOfStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createForOf(
		options.hook("awaitModifier", options.nextNode(node.awaitModifier), node.awaitModifier) as never,
		options.hook("initializer", options.nextNode(node.initializer), node.initializer) as never,
		options.hook("expression", options.nextNode(node.expression), node.expression) as never,
		options.hook("statement", options.nextNode(node.statement), node.statement) as never
	) as unknown) as TS.ForOfStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ForOfStatement, options: CloneNodeVisitorOptions<TS.ForOfStatement>): TS.ForOfStatement {
	return options.factory.createForOfStatement(
		options.hook("awaitModifier", options.nextNode(node.awaitModifier), node.awaitModifier),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer),
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
