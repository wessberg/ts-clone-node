import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "helpertypes";

export function cloneJsDocThisTag(node: Mutable<TS.JSDocThisTag>, options: CloneNodeVisitorOptions<TS.JSDocThisTag>): TS.JSDocThisTag {
	const baseNode = options.factory.createJSDocThisTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocThisTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
