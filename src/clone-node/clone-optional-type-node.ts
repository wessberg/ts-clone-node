import {createOptionalTypeNode, OptionalTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneOptionalTypeNode (node: OptionalTypeNode, options: CloneNodeInternalOptions<OptionalTypeNode>): OptionalTypeNode {
	return createOptionalTypeNode(
		options.hook("type", cloneNode(node.type))
	);
}