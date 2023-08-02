import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {ensureNodeArray} from "./util/ensure-node-array.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocTemplateTag(node: Mutable<TS.JSDocTemplateTag>, options: CloneNodeVisitorOptions<TS.JSDocTemplateTag>): TS.JSDocTemplateTag {
	const baseNode = options.factory.createJSDocTemplateTag(
		options.hook("tagName", options.nextNode(node.tagName), node.tagName),
		options.hook("constraint", options.nextNode(node.constraint), node.constraint),
		ensureNodeArray(options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters), options.factory),
		options.hook("comment", node.comment, node.comment)
	) as Mutable<TS.JSDocTemplateTag>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
