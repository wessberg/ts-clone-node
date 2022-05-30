import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocEnumTag(node: Mutable<TS.JSDocEnumTag>, options: CloneNodeVisitorOptions<TS.JSDocEnumTag>): TS.JSDocEnumTag {
	const baseNode = options.factory.createJSDocEnumTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocEnumTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
