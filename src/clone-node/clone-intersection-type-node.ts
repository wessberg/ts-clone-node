import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneIntersectionTypeNode(
	node: TS.IntersectionTypeNode,
	options: CloneNodeInternalOptions<TS.IntersectionTypeNode>
): TS.IntersectionTypeNode {
	return options.typescript.createIntersectionTypeNode(
		options.hook("types", cloneNodes(node.types, nextOptions(options)), node.types, payload(options))
	);
}
