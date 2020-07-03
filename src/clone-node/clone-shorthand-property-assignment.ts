import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneShorthandPropertyAssignment(
	node: TS.ShorthandPropertyAssignment,
	options: CloneNodeVisitorOptions<TS.ShorthandPropertyAssignment>
): TS.ShorthandPropertyAssignment {
	return options.factory.createShorthandPropertyAssignment(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("objectAssignmentInitializer", options.nextNode(node.objectAssignmentInitializer), node.objectAssignmentInitializer)
	);
}
