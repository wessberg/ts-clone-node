import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocCallbackTag(node: Mutable<TS.JSDocCallbackTag>, options: CloneNodeVisitorOptions<TS.JSDocCallbackTag>): TS.JSDocCallbackTag {
	const baseNode = options.factory.createJSDocCallbackTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression),
		options.hook("fullName", options.nextNode(node.fullName), node.fullName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocCallbackTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.name = options.hook("name", options.nextNode(node.name), node.name);

	return baseNode;
}
