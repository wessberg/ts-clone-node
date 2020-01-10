import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneModuleBlock(node: TS.ModuleBlock, options: CloneNodeVisitorOptions<TS.ModuleBlock>): TS.ModuleBlock {
	return options.typescript.createModuleBlock(options.hook("statements", options.nextNodes(node.statements), node.statements));
}
