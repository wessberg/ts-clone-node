import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneContinueStatement(node: TS.ContinueStatement, options: CloneNodeVisitorOptions<TS.ContinueStatement>): TS.ContinueStatement {
	return options.typescript.createContinue(options.hook("label", options.nextNode(node.label), node.label));
}
