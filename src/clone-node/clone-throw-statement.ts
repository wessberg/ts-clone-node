import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneThrowStatement(node: TS.ThrowStatement, options: CloneNodeVisitorOptions<TS.ThrowStatement>): TS.ThrowStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ThrowStatement, options: CloneNodeVisitorOptions<TS.ThrowStatement>): TS.ThrowStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createThrow(options.hook("expression", options.nextNode(node.expression), node.expression)! as never) as unknown) as TS.ThrowStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ThrowStatement, options: CloneNodeVisitorOptions<TS.ThrowStatement>): TS.ThrowStatement {
	return options.factory.createThrowStatement(options.hook("expression", options.nextNode(node.expression), node.expression)!);
}
