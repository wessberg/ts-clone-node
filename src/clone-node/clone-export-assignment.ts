import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExportAssignment(node: TS.ExportAssignment, options: CloneNodeVisitorOptions<TS.ExportAssignment>): TS.ExportAssignment {
	return options.typescript.createExportAssignment(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("isExportEquals", node.isExportEquals, node.isExportEquals),
		options.hook("expression", options.nextNode(node.expression), node.expression)
	);
}
