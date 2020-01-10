import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJsDocReturnTag(node: TS.JSDocReturnTag, options: CloneNodeVisitorOptions<TS.JSDocReturnTag>): TS.JSDocReturnTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocReturnTag, -1, -1) as TS.JSDocReturnTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.typeExpression = options.hook("typeExpression", options.nextNode(node.typeExpression), node.typeExpression);

	return baseNode;
}
