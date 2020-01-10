import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocTypedefTag(node: TS.JSDocTypedefTag, options: CloneNodeVisitorOptions<TS.JSDocTypedefTag>): TS.JSDocTypedefTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocTypedefTag, -1, -1) as TS.JSDocTypedefTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.fullName = options.hook("fullName", options.nextNode(node.fullName), node.fullName);
	baseNode.name = options.hook("name", options.nextNode(node.name), node.name);
	baseNode.typeExpression = options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression);

	return baseNode;
}
