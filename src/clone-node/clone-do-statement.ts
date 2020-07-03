import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneDoStatement(node: TS.DoStatement, options: CloneNodeVisitorOptions<TS.DoStatement>): TS.DoStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.DoStatement, options: CloneNodeVisitorOptions<TS.DoStatement>): TS.DoStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	return (typescript.createDo(
		options.hook("statement", options.nextNode(node.statement), node.statement) as never,
		options.hook("expression", options.nextNode(node.expression), node.expression) as never
	) as unknown) as TS.DoStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.DoStatement, options: CloneNodeVisitorOptions<TS.DoStatement>): TS.DoStatement {
	return options.factory.createDoStatement(
		options.hook("statement", options.nextNode(node.statement), node.statement),
		options.hook("expression", options.nextNode(node.expression), node.expression)
	);
}
