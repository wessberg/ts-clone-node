import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function clonePropertyAssignment(
	node: TS.PropertyAssignment,
	options: CloneNodeInternalOptions<TS.PropertyAssignment>
): TS.PropertyAssignment {
	return options.typescript.createPropertyAssignment(
		options.hook("name", cloneNode(node.name, nextOptions(options)), node.name, payload(options)),
		options.hook("initializer", cloneNode(node.initializer, nextOptions(options)), node.initializer, payload(options))
	);
}
