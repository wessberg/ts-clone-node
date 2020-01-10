import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneJsDocClassTag(node: TS.JSDocClassTag, options: CloneNodeVisitorOptions<TS.JSDocClassTag>): TS.JSDocClassTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocClassTag, -1, -1) as TS.JSDocClassTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	return baseNode;
}
