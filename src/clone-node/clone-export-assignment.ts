import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneExportAssignment(node: TS.ExportAssignment, options: CloneNodeVisitorOptions<TS.ExportAssignment>): TS.ExportAssignment {
	return options.factory.createExportAssignment(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("isExportEquals", node.isExportEquals, node.isExportEquals),
		options.hook("expression", options.nextNode(node.expression), node.expression)
	);
}
