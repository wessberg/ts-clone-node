import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocThrowsTag(node: Mutable<TS.JSDocThrowsTag>, options: CloneNodeVisitorOptions<TS.JSDocThrowsTag>): TS.JSDocThrowsTag {
	const baseNode = options.factory.createJSDocThrowsTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression),
		options.hook("comment", typeof node.comment === "string" ? node.comment : options.nextNodes(node.comment), node.comment)
	) as Mutable<TS.JSDocThrowsTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
