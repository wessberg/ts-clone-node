import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocPropertyTag(node: TS.JSDocPropertyTag, options: CloneNodeVisitorOptions<TS.JSDocPropertyTag>): TS.JSDocPropertyTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocPropertyTag, -1, -1) as TS.JSDocPropertyTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.name = options.hook("name", options.nextNode(node.name), node.name);
	baseNode.typeExpression = options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression);
	baseNode.isNameFirst = options.hook("isNameFirst", node.isNameFirst, node.isNameFirst);
	baseNode.isBracketed = options.hook("isBracketed", node.isBracketed, node.isBracketed);

	return baseNode;
}
