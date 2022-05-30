import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocPublicTag(node: Mutable<TS.JSDocPublicTag>, options: CloneNodeVisitorOptions<TS.JSDocPublicTag>): TS.JSDocPublicTag {
	const baseNode = options.factory.createJSDocPublicTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocPublicTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
