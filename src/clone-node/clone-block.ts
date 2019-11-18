import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneBlock(node: TS.Block, options: CloneNodeInternalOptions<TS.Block>): TS.Block {
	return options.typescript.createBlock(options.hook("statements", cloneNodes(node.statements, nextOptions(options)), payload(options)));
}
