import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneBlock(node: TS.Block, options: CloneNodeVisitorOptions<TS.Block>): TS.Block {
	return options.factory.createBlock(options.hook("statements", options.nextNodes(node.statements), node.statements));
}
