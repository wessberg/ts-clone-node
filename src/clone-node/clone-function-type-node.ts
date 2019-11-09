import {createFunctionTypeNode, FunctionTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneFunctionTypeNode (node: FunctionTypeNode, options: CloneNodeInternalOptions<FunctionTypeNode>): FunctionTypeNode {
	return createFunctionTypeNode(
		options.hook("typeParameters", cloneNodes(node.typeParameters)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("type", cloneNode(node.type))
	);
}