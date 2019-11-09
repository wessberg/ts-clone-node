import {createTypeReferenceNode, TypeReferenceNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneTypeReferenceNode (node: TypeReferenceNode, options: CloneNodeInternalOptions<TypeReferenceNode>): TypeReferenceNode {
	return createTypeReferenceNode(
		options.hook("typeName", cloneNode(node.typeName)),
		options.hook("typeArguments", cloneNodes(node.typeArguments))
	);
}