import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocCallbackTag(node: TS.JSDocCallbackTag, options: CloneNodeVisitorOptions<TS.JSDocCallbackTag>): TS.JSDocCallbackTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocCallbackTag, -1, -1) as TS.JSDocCallbackTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.fullName = options.hook("fullName", options.nextNode(node.fullName), node.fullName);
	baseNode.name = options.hook("name", options.nextNode(node.name), node.name);
	baseNode.typeExpression = options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression);

	return baseNode;
}
