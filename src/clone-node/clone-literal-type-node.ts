import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneLiteralTypeNode(node: TS.LiteralTypeNode, options: CloneNodeVisitorOptions<TS.LiteralTypeNode>): TS.LiteralTypeNode {
	return options.factory.createLiteralTypeNode(options.hook("literal", options.nextNode(node.literal), node.literal));
}
