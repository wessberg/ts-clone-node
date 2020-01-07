import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneUnionTypeNode(node: TS.UnionTypeNode, options: CloneNodeInternalOptions<TS.UnionTypeNode>): TS.UnionTypeNode {
	return options.typescript.createUnionTypeNode(options.hook("types", cloneNodes(node.types, nextOptions(options)), node.types, payload(options)));
}
