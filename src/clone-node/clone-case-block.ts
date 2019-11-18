import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneCaseBlock(node: TS.CaseBlock, options: CloneNodeInternalOptions<TS.CaseBlock>): TS.CaseBlock {
	return options.typescript.createCaseBlock(options.hook("clauses", cloneNodes(node.clauses, nextOptions(options)), payload(options)));
}
