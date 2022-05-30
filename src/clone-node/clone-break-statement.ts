import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneBreakStatement(node: TS.BreakStatement, options: CloneNodeVisitorOptions<TS.BreakStatement>): TS.BreakStatement {
	return options.factory.createBreakStatement(options.hook("label", options.nextNode(node.label), node.label));
}
