import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneModuleBlock(node: TS.ModuleBlock, options: CloneNodeInternalOptions<TS.ModuleBlock>): TS.ModuleBlock {
	return options.typescript.createModuleBlock(options.hook("statements", cloneNodes(node.statements, nextOptions(options)), payload(options)));
}
