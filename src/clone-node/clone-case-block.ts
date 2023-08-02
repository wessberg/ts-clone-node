import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneCaseBlock(node: TS.CaseBlock, options: CloneNodeVisitorOptions<TS.CaseBlock>): TS.CaseBlock {
	return options.factory.createCaseBlock(options.hook("clauses", options.nextNodes(node.clauses), node.clauses));
}
