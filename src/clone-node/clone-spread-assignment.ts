import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneSpreadAssignment(node: TS.SpreadAssignment, options: CloneNodeVisitorOptions<TS.SpreadAssignment>): TS.SpreadAssignment {
	return options.factory.createSpreadAssignment(options.hook("expression", options.nextNode(node.expression), node.expression));
}
