import {createInferTypeNode, InferTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneInferTypeNode (node: InferTypeNode, options: CloneNodeInternalOptions<InferTypeNode>): InferTypeNode {
	return createInferTypeNode(
		options.hook("typeParameter", cloneNode(node.typeParameter))
	);
}