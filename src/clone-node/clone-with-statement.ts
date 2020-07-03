import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneWithStatement(node: TS.WithStatement, options: CloneNodeVisitorOptions<TS.WithStatement>): TS.WithStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.WithStatement, options: CloneNodeVisitorOptions<TS.WithStatement>): TS.WithStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createWith(
		options.hook("expression", options.nextNode(node.expression), node.expression) as never,
		options.hook("statement", options.nextNode(node.statement), node.statement) as never
	) as unknown) as TS.WithStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.WithStatement, options: CloneNodeVisitorOptions<TS.WithStatement>): TS.WithStatement {
	return options.factory.createWithStatement(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
