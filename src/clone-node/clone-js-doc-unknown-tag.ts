import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "helpertypes";

export function cloneJsDocUnknownTag(node: Mutable<TS.JSDocUnknownTag>, options: CloneNodeVisitorOptions<TS.JSDocUnknownTag>): TS.JSDocUnknownTag {
	const baseNode = options.factory.createJSDocUnknownTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocUnknownTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	return baseNode;
}
