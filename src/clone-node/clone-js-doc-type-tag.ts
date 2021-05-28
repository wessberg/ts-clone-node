import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "helpertypes";

export function cloneJsDocTypeTag(node: Mutable<TS.JSDocTypeTag>, options: CloneNodeVisitorOptions<TS.JSDocTypeTag>): TS.JSDocTypeTag {
	const baseNode = options.factory.createJSDocTypeTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocTypeTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
