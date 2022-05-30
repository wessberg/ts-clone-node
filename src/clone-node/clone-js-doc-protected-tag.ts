import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocProtectedTag(node: Mutable<TS.JSDocProtectedTag>, options: CloneNodeVisitorOptions<TS.JSDocProtectedTag>): TS.JSDocProtectedTag {
	const baseNode = options.factory.createJSDocProtectedTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocProtectedTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
