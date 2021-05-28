import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "helpertypes";

export function cloneJsDocParameterTag(node: Mutable<TS.JSDocParameterTag>, options: CloneNodeVisitorOptions<TS.JSDocParameterTag>): TS.JSDocParameterTag {
	const baseNode = options.factory.createJSDocParameterTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("isBracketed", node.isBracketed, node.isBracketed),
		options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression),
		options.hook("isNameFirst", node.isNameFirst, node.isNameFirst),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocParameterTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
