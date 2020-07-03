import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneContinueStatement(node: TS.ContinueStatement, options: CloneNodeVisitorOptions<TS.ContinueStatement>): TS.ContinueStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ContinueStatement, options: CloneNodeVisitorOptions<TS.ContinueStatement>): TS.ContinueStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createContinue(options.hook("label", options.nextNode(node.label), node.label) as never) as unknown) as TS.ContinueStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ContinueStatement, options: CloneNodeVisitorOptions<TS.ContinueStatement>): TS.ContinueStatement {
	return options.factory.createContinueStatement(options.hook("label", options.nextNode(node.label), node.label));
}
