import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneReturnStatement(node: TS.ReturnStatement, options: CloneNodeVisitorOptions<TS.ReturnStatement>): TS.ReturnStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ReturnStatement, options: CloneNodeVisitorOptions<TS.ReturnStatement>): TS.ReturnStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createReturn(options.hook("expression", options.nextNode(node.expression), node.expression) as never) as unknown) as TS.ReturnStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ReturnStatement, options: CloneNodeVisitorOptions<TS.ReturnStatement>): TS.ReturnStatement {
	return options.factory.createReturnStatement(options.hook("expression", options.nextNode(node.expression), node.expression));
}
