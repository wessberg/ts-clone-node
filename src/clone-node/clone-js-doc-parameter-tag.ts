import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsDocParameterTag(node: TS.JSDocParameterTag, options: CloneNodeVisitorOptions<TS.JSDocParameterTag>): TS.JSDocParameterTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocParameterTag, -1, -1) as TS.JSDocParameterTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.name = options.hook("name", options.nextNode(node.name), node.name);
	baseNode.typeExpression = options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression);
	baseNode.isNameFirst = options.hook("isNameFirst", node.isNameFirst, node.isNameFirst);
	baseNode.isBracketed = options.hook("isBracketed", node.isBracketed, node.isBracketed);

	return baseNode;
}
