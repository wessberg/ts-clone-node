import {ArrayBindingPattern, createArrayBindingPattern} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneArrayBindingPattern (node: ArrayBindingPattern, options: CloneNodeInternalOptions<ArrayBindingPattern>): ArrayBindingPattern {
	return createArrayBindingPattern(
		options.hook("elements", cloneNodes(node.elements))
	);
}