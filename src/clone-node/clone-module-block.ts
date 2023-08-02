import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneModuleBlock(node: TS.ModuleBlock, options: CloneNodeVisitorOptions<TS.ModuleBlock>): TS.ModuleBlock {
	return options.factory.createModuleBlock(options.hook("statements", options.nextNodes(node.statements), node.statements));
}
