import {createObjectBindingPattern, ObjectBindingPattern} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneObjectBindingPattern (node: ObjectBindingPattern, options: CloneNodeInternalOptions<ObjectBindingPattern>): ObjectBindingPattern {
	return createObjectBindingPattern(
		options.hook("elements", cloneNodes(node.elements))
	);
}