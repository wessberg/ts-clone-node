import {createExportAssignment, ExportAssignment} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";

export function cloneExportAssignment (node: ExportAssignment, options: CloneNodeInternalOptions<ExportAssignment>): ExportAssignment {
	return createExportAssignment(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("isExportEquals", node.isExportEquals),
		options.hook("expression", cloneNode(node.expression))
	);
}