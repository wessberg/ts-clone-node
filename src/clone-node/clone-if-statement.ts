import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneIfStatement(node: TS.IfStatement, options: CloneNodeVisitorOptions<TS.IfStatement>): TS.IfStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.IfStatement, options: CloneNodeVisitorOptions<TS.IfStatement>): TS.IfStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createIf(
		options.hook("expression", options.nextNode(node.expression), node.expression) as never,
		options.hook("thenStatement", options.nextNode(node.thenStatement), node.thenStatement) as never,
		options.hook("elseStatement", options.nextNode(node.elseStatement), node.elseStatement) as never
	) as unknown) as TS.IfStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.IfStatement, options: CloneNodeVisitorOptions<TS.IfStatement>): TS.IfStatement {
	return options.factory.createIfStatement(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("thenStatement", options.nextNode(node.thenStatement), node.thenStatement),
		options.hook("elseStatement", options.nextNode(node.elseStatement), node.elseStatement)
	);
}
