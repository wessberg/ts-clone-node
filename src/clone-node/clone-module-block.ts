import {createModuleBlock, ModuleBlock} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneModuleBlock (node: ModuleBlock, options: CloneNodeInternalOptions<ModuleBlock>): ModuleBlock {
	return createModuleBlock(
		options.hook("statements", cloneNodes(node.statements))
	);
}