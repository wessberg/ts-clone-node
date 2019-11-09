import {ConstructorTypeNode, createConstructorTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneConstructorTypeNode (node: ConstructorTypeNode, options: CloneNodeInternalOptions<ConstructorTypeNode>): ConstructorTypeNode {
	return createConstructorTypeNode(
		options.hook("typeParameters", cloneNodes(node.typeParameters)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("type", cloneNode(node.type))
	);
}