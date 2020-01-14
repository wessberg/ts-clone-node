import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocPublicTag(node: TS.JSDocPublicTag, options: CloneNodeVisitorOptions<TS.JSDocPublicTag>): TS.JSDocPublicTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocPublicTag, -1, -1) as TS.JSDocPublicTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);

	return baseNode;
}
