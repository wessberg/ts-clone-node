import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocDeprecatedTag(node: Mutable<TS.JSDocDeprecatedTag>, options: CloneNodeVisitorOptions<TS.JSDocDeprecatedTag>): TS.JSDocDeprecatedTag {
	const baseNode = options.factory.createJSDocDeprecatedTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocDeprecatedTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
