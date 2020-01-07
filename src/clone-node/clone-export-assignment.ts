import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneExportAssignment(node: TS.ExportAssignment, options: CloneNodeInternalOptions<TS.ExportAssignment>): TS.ExportAssignment {
	return options.typescript.createExportAssignment(
		options.hook("decorators", cloneNodes(node.decorators, nextOptions(node.decorators, options)), node.decorators, payload(options)),
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(node.modifiers, options)), node.modifiers, payload(options)),
		options.hook("isExportEquals", node.isExportEquals, node.isExportEquals, payload(options)),
		options.hook("expression", cloneNode(node.expression, nextOptions(node.expression, options)), node.expression, payload(options))
	);
}
