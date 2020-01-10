import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneComputedPropertyName(
	node: TS.ComputedPropertyName,
	options: CloneNodeVisitorOptions<TS.ComputedPropertyName>
): TS.ComputedPropertyName {
	return options.typescript.createComputedPropertyName(options.hook("expression", options.nextNode(node.expression), node.expression));
}
