import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocSeeTag(node: Mutable<TS.JSDocSeeTag>, options: CloneNodeVisitorOptions<TS.JSDocSeeTag>): TS.JSDocSeeTag {
	const baseNode = options.factory.createJSDocSeeTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		// NOTE: do we want to wrap around `node.name`, which is a
		// `JSDocNameReference`?
		options.hook("name", node.name, node.name),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocSeeTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
