import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneBlock(node: TS.Block, options: CloneNodeVisitorOptions<TS.Block>): TS.Block {
	return options.typescript.createBlock(options.hook("statements", options.nextNodes(node.statements), node.statements));
}
