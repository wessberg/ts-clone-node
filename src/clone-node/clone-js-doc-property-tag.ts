import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocPropertyTag(node: Mutable<TS.JSDocPropertyTag>, options: CloneNodeVisitorOptions<TS.JSDocPropertyTag>): TS.JSDocPropertyTag {
	const baseNode = options.factory.createJSDocPropertyTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("isBracketed", node.isBracketed, node.isBracketed),
		options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression),
		options.hook("isNameFirst", node.isNameFirst, node.isNameFirst),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocPropertyTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
