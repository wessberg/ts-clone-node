import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function clonePropertyAssignment(node: TS.PropertyAssignment, options: CloneNodeVisitorOptions<TS.PropertyAssignment>): TS.PropertyAssignment {
	return options.factory.createPropertyAssignment(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
