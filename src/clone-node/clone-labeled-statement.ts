import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneLabeledStatement(node: TS.LabeledStatement, options: CloneNodeVisitorOptions<TS.LabeledStatement>): TS.LabeledStatement {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.LabeledStatement, options: CloneNodeVisitorOptions<TS.LabeledStatement>): TS.LabeledStatement {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createLabel(
		options.hook("label", options.nextNode(node.label), node.label) as never,
		options.hook("statement", options.nextNode(node.statement), node.statement) as never
	) as unknown) as TS.LabeledStatement;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.LabeledStatement, options: CloneNodeVisitorOptions<TS.LabeledStatement>): TS.LabeledStatement {
	return options.factory.createLabeledStatement(
		options.hook("label", options.nextNode(node.label), node.label),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
