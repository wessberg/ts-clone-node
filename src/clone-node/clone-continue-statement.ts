import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneContinueStatement(node: TS.ContinueStatement, options: CloneNodeVisitorOptions<TS.ContinueStatement>): TS.ContinueStatement {
	return options.factory.createContinueStatement(options.hook("label", options.nextNode(node.label), node.label));
}
