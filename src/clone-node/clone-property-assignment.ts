import {createPropertyAssignment, PropertyAssignment} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function clonePropertyAssignment (node: PropertyAssignment, options: CloneNodeInternalOptions<PropertyAssignment>): PropertyAssignment {
	return createPropertyAssignment(
		options.hook("name", cloneNode(node.name)),
		options.hook("initializer", cloneNode(node.initializer))
	);
}