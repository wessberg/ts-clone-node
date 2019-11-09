import {createRestTypeNode, RestTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneRestTypeNode (node: RestTypeNode, options: CloneNodeInternalOptions<RestTypeNode>): RestTypeNode {
	return createRestTypeNode(
		options.hook("type", cloneNode(node.type))
	);
}