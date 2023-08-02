import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocSatisfiesTag(node: Mutable<TS.JSDocSatisfiesTag>, options: CloneNodeVisitorOptions<TS.JSDocSatisfiesTag>): TS.JSDocSatisfiesTag {
	const baseNode = options.factory.createJSDocSatisfiesTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression),
		options.hook("comment", typeof node.comment === "string" ? node.comment : options.nextNodes(node.comment), node.comment)
	) as Mutable<TS.JSDocSatisfiesTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
