import {Block, createBlock} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneBlock (node: Block, options: CloneNodeInternalOptions<Block>): Block {
	return createBlock(
		options.hook("statements", cloneNodes(node.statements))
	);
}