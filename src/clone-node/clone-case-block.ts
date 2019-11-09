import {CaseBlock, createCaseBlock} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneCaseBlock (node: CaseBlock, options: CloneNodeInternalOptions<CaseBlock>): CaseBlock {
	return createCaseBlock(
		options.hook("clauses", cloneNodes(node.clauses))
	);
}