import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExportAssignment(node: TS.ExportAssignment, options: CloneNodeVisitorOptions<TS.ExportAssignment>): TS.ExportAssignment {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ExportAssignment, options: CloneNodeVisitorOptions<TS.ExportAssignment>): TS.ExportAssignment {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createExportAssignment(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators) as never,
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("isExportEquals", node.isExportEquals, node.isExportEquals) as never,
		options.hook("expression", options.nextNode(node.expression), node.expression) as never
	) as unknown) as TS.ExportAssignment;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ExportAssignment, options: CloneNodeVisitorOptions<TS.ExportAssignment>): TS.ExportAssignment {
	return options.factory.createExportAssignment(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("isExportEquals", node.isExportEquals, node.isExportEquals),
		options.hook("expression", options.nextNode(node.expression), node.expression)
	);
}
