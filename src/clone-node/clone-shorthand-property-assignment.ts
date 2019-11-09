import {createShorthandPropertyAssignment, ShorthandPropertyAssignment} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneShorthandPropertyAssignment (node: ShorthandPropertyAssignment, options: CloneNodeInternalOptions<ShorthandPropertyAssignment>): ShorthandPropertyAssignment {
	return createShorthandPropertyAssignment(
		options.hook("name", cloneNode(node.name)),
		options.hook("objectAssignmentInitializer", cloneNode(node.objectAssignmentInitializer))
	);
}