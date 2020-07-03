import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneDefaultClause(node: TS.DefaultClause, options: CloneNodeVisitorOptions<TS.DefaultClause>): TS.DefaultClause {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.DefaultClause, options: CloneNodeVisitorOptions<TS.DefaultClause>): TS.DefaultClause {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createDefaultClause(options.hook("statements", options.nextNodes(node.statements), node.statements) as never) as unknown) as TS.DefaultClause;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.DefaultClause, options: CloneNodeVisitorOptions<TS.DefaultClause>): TS.DefaultClause {
	return options.factory.createDefaultClause(options.hook("statements", options.nextNodes(node.statements), node.statements));
}
