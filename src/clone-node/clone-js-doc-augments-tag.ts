import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocAugmentsTag(node: TS.JSDocAugmentsTag, options: CloneNodeVisitorOptions<TS.JSDocAugmentsTag>): TS.JSDocAugmentsTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocAugmentsTag, -1, -1) as TS.JSDocAugmentsTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.class = options.hook("class", options.nextNode(node.class), node.class);
	return baseNode;
}
