import {createParenthesizedType, ParenthesizedTypeNode} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneParenthesizedTypeNode (node: ParenthesizedTypeNode, options: CloneNodeInternalOptions<ParenthesizedTypeNode>): ParenthesizedTypeNode {
	return createParenthesizedType(
		options.hook("type", cloneNode(node.type))
	);
}