import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocPrivateTag(node: TS.JSDocPrivateTag, options: CloneNodeVisitorOptions<TS.JSDocPrivateTag>): TS.JSDocPrivateTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocPrivateTag, -1, -1) as TS.JSDocPrivateTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);

	return baseNode;
}
