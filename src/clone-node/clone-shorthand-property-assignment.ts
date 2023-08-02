import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneShorthandPropertyAssignment(
	node: TS.ShorthandPropertyAssignment,
	options: CloneNodeVisitorOptions<TS.ShorthandPropertyAssignment>
): TS.ShorthandPropertyAssignment {
	return options.factory.createShorthandPropertyAssignment(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("objectAssignmentInitializer", options.nextNode(node.objectAssignmentInitializer), node.objectAssignmentInitializer)
	);
}
