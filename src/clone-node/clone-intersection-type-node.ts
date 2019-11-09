import {createIntersectionTypeNode, IntersectionTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneIntersectionTypeNode (node: IntersectionTypeNode, options: CloneNodeInternalOptions<IntersectionTypeNode>): IntersectionTypeNode {
	return createIntersectionTypeNode(
		options.hook("types", cloneNodes(node.types))
	);
}