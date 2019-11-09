import {ComputedPropertyName, createComputedPropertyName} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneComputedPropertyName (node: ComputedPropertyName, options: CloneNodeInternalOptions<ComputedPropertyName>): ComputedPropertyName {
	return createComputedPropertyName(
		options.hook("expression", cloneNode(node.expression))
	);
}