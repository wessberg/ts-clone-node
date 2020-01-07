import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneComputedPropertyName(
	node: TS.ComputedPropertyName,
	options: CloneNodeInternalOptions<TS.ComputedPropertyName>
): TS.ComputedPropertyName {
	return options.typescript.createComputedPropertyName(
		options.hook("expression", cloneNode(node.expression, nextOptions(node.expression, options)), node.expression, payload(options))
	);
}
