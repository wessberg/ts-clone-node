import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "helpertypes";

export function cloneJsDocTypedefTag(node: Mutable<TS.JSDocTypedefTag>, options: CloneNodeVisitorOptions<TS.JSDocTypedefTag>): TS.JSDocTypedefTag {
	const baseNode = options.factory.createJSDocTypedefTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression),
		options.hook("fullName", options.nextNode(node.fullName), node.fullName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocTypedefTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.name = options.hook("name", options.nextNode(node.name), node.name);

	return baseNode;
}
