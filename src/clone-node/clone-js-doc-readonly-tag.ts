import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocReadonlyTag(node: TS.JSDocReadonlyTag, options: CloneNodeVisitorOptions<TS.JSDocReadonlyTag>): TS.JSDocReadonlyTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocReadonlyTag, -1, -1) as TS.JSDocReadonlyTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);

	return baseNode;
}
