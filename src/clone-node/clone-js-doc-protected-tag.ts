import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocProtectedTag(node: TS.JSDocProtectedTag, options: CloneNodeVisitorOptions<TS.JSDocProtectedTag>): TS.JSDocProtectedTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocProtectedTag, -1, -1) as TS.JSDocProtectedTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);

	return baseNode;
}
