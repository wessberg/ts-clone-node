import {createSpreadAssignment, SpreadAssignment} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneSpreadAssignment (node: SpreadAssignment, options: CloneNodeInternalOptions<SpreadAssignment>): SpreadAssignment {
	return createSpreadAssignment(
		options.hook("expression", cloneNode(node.expression))
	);
}