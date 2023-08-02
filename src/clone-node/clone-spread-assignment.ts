import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneSpreadAssignment(node: TS.SpreadAssignment, options: CloneNodeVisitorOptions<TS.SpreadAssignment>): TS.SpreadAssignment {
	return options.factory.createSpreadAssignment(options.hook("expression", options.nextNode(node.expression), node.expression));
}
