import {createUnionTypeNode, UnionTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneUnionTypeNode (node: UnionTypeNode, options: CloneNodeInternalOptions<UnionTypeNode>): UnionTypeNode {
	return createUnionTypeNode(
		options.hook("types", cloneNodes(node.types))
	);
}