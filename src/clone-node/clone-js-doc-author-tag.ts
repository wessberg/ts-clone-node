import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsDocAuthorTag(node: TS.JSDocAuthorTag, options: CloneNodeVisitorOptions<TS.JSDocAuthorTag>): TS.JSDocAuthorTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocAuthorTag, -1, -1) as TS.JSDocAuthorTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	return baseNode;
}
