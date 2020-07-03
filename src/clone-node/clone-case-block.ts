import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneCaseBlock(node: TS.CaseBlock, options: CloneNodeVisitorOptions<TS.CaseBlock>): TS.CaseBlock {
	return options.factory.createCaseBlock(options.hook("clauses", options.nextNodes(node.clauses), node.clauses));
}
