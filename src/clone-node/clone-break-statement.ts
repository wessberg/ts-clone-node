import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneBreakStatement(node: TS.BreakStatement, options: CloneNodeVisitorOptions<TS.BreakStatement>): TS.BreakStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.BreakStatement, options: CloneNodeVisitorOptions<TS.BreakStatement>): TS.BreakStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createBreak(options.hook("label", options.nextNode(node.label), node.label) as never) as unknown) as TS.BreakStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.BreakStatement, options: CloneNodeVisitorOptions<TS.BreakStatement>): TS.BreakStatement {
	return options.factory.createBreakStatement(options.hook("label", options.nextNode(node.label), node.label));
}
