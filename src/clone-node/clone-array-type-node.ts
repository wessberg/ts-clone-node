import {ArrayTypeNode, createArrayTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneArrayTypeNode (node: ArrayTypeNode, options: CloneNodeInternalOptions<ArrayTypeNode>): ArrayTypeNode {
	return createArrayTypeNode(
		options.hook("elementType", cloneNode(node.elementType))
	);
}