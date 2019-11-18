import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneObjectBindingPattern(
	node: TS.ObjectBindingPattern,
	options: CloneNodeInternalOptions<TS.ObjectBindingPattern>
): TS.ObjectBindingPattern {
	return options.typescript.createObjectBindingPattern(options.hook("elements", cloneNodes(node.elements, nextOptions(options)), payload(options)));
}
