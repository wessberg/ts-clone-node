import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {TS} from "./type/ts.js";
import {Mutable} from "helpertypes";

export function cloneJsDocClassTag(node: Mutable<TS.JSDocClassTag>, options: CloneNodeVisitorOptions<TS.JSDocClassTag>): TS.JSDocClassTag {
	const baseNode = options.factory.createJSDocClassTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocClassTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	return baseNode;
}
