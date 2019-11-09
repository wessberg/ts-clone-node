import {createTupleTypeNode, TupleTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneTupleTypeNode (node: TupleTypeNode, options: CloneNodeInternalOptions<TupleTypeNode>): TupleTypeNode {
	return createTupleTypeNode(
		options.hook("elementTypes", cloneNodes(node.elementTypes))
	);
}