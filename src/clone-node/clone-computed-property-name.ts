import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneComputedPropertyName(node: TS.ComputedPropertyName, options: CloneNodeVisitorOptions<TS.ComputedPropertyName>): TS.ComputedPropertyName {
	return options.factory.createComputedPropertyName(options.hook("expression", options.nextNode(node.expression), node.expression));
}
