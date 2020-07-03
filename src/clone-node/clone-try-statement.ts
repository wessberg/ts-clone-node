import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTryStatement(node: TS.TryStatement, options: CloneNodeVisitorOptions<TS.TryStatement>): TS.TryStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.TryStatement, options: CloneNodeVisitorOptions<TS.TryStatement>): TS.TryStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createTry(
		options.hook("tryBlock", options.nextNode(node.tryBlock), node.tryBlock) as never,
		options.hook("catchClause", options.nextNode(node.catchClause), node.catchClause) as never,
		options.hook("finallyBlock", options.nextNode(node.finallyBlock), node.finallyBlock) as never
	) as unknown) as TS.TryStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.TryStatement, options: CloneNodeVisitorOptions<TS.TryStatement>): TS.TryStatement {
	return options.factory.createTryStatement(
		options.hook("tryBlock", options.nextNode(node.tryBlock), node.tryBlock),
		options.hook("catchClause", options.nextNode(node.catchClause), node.catchClause),
		options.hook("finallyBlock", options.nextNode(node.finallyBlock), node.finallyBlock)
	);
}
