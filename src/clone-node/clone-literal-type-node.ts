import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneLiteralTypeNode(node: TS.LiteralTypeNode, options: CloneNodeVisitorOptions<TS.LiteralTypeNode>): TS.LiteralTypeNode {
	return options.typescript.createLiteralTypeNode(options.hook("literal", options.nextNode(node.literal), node.literal));
}
