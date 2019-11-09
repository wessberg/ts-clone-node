import {createLiteralTypeNode, LiteralTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneLiteralTypeNode (node: LiteralTypeNode, options: CloneNodeInternalOptions<LiteralTypeNode>): LiteralTypeNode {
	return createLiteralTypeNode(
		options.hook("literal", cloneNode(node.literal))
	);
}