import {createTypeLiteralNode, TypeLiteralNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneTypeLiteralNode (node: TypeLiteralNode, options: CloneNodeInternalOptions<TypeLiteralNode>): TypeLiteralNode {
	return createTypeLiteralNode(
		options.hook("members", cloneNodes(node.members))
	);
}