import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneContinueStatement(node: TS.ContinueStatement, options: CloneNodeVisitorOptions<TS.ContinueStatement>): TS.ContinueStatement {
	return options.factory.createContinueStatement(options.hook("label", options.nextNode(node.label), node.label));
}
