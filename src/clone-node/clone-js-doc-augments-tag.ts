import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocAugmentsTag(node: Mutable<TS.JSDocAugmentsTag>, options: CloneNodeVisitorOptions<TS.JSDocAugmentsTag>): TS.JSDocAugmentsTag {
	const baseNode = options.factory.createJSDocAugmentsTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("class", options.nextNode(node.class), node.class),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocAugmentsTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	return baseNode;
}
