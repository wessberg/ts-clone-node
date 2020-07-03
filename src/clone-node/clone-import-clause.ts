import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneImportClause(node: TS.ImportClause, options: CloneNodeVisitorOptions<TS.ImportClause>): TS.ImportClause {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ImportClause, options: CloneNodeVisitorOptions<TS.ImportClause>): TS.ImportClause {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createImportClause(
		options.hook("name", options.nextNode(node.name), node.name) as never,
		options.hook("namedBindings", options.nextNode(node.namedBindings), node.namedBindings) as never,
		options.hook("isTypeOnly", node.isTypeOnly, node.isTypeOnly)
	) as unknown) as TS.ImportClause;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ImportClause, options: CloneNodeVisitorOptions<TS.ImportClause>): TS.ImportClause {
	return options.factory.createImportClause(
		options.hook("isTypeOnly", node.isTypeOnly, node.isTypeOnly),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("namedBindings", options.nextNode(node.namedBindings), node.namedBindings)
	);
}
