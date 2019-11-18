import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneTupleTypeNode(node: TS.TupleTypeNode, options: CloneNodeInternalOptions<TS.TupleTypeNode>): TS.TupleTypeNode {
	return options.typescript.createTupleTypeNode(options.hook("elementTypes", cloneNodes(node.elementTypes, nextOptions(options)), payload(options)));
}
