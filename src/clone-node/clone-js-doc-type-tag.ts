import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsDocTypeTag(node: TS.JSDocTypeTag, options: CloneNodeVisitorOptions<TS.JSDocTypeTag>): TS.JSDocTypeTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocTypeTag, -1, -1) as TS.JSDocTypeTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.typeExpression = options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression);

	return baseNode;
}
