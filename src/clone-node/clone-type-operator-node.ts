import {createTypeOperatorNode, TypeOperatorNode} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneTypeOperatorNode (node: TypeOperatorNode, options: CloneNodeInternalOptions<TypeOperatorNode>): TypeOperatorNode {
	return createTypeOperatorNode(
		options.hook("operator", cloneNode(node.operator)),
		options.hook("type", cloneNode(node.type))
	);
}