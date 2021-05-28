import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "helpertypes";

export function cloneJsDocReadonlyTag(node: Mutable<TS.JSDocReadonlyTag>, options: CloneNodeVisitorOptions<TS.JSDocReadonlyTag>): TS.JSDocReadonlyTag {
	const baseNode = options.factory.createJSDocReadonlyTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocReadonlyTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
