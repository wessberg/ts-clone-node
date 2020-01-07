import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneArrayBindingPattern(
	node: TS.ArrayBindingPattern,
	options: CloneNodeInternalOptions<TS.ArrayBindingPattern>
): TS.ArrayBindingPattern {
	return options.typescript.createArrayBindingPattern(
		options.hook("elements", cloneNodes(node.elements, nextOptions(options)), node.elements, payload(options))
	);
}
