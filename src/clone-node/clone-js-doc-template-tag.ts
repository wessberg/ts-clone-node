import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {ensureNodeArray} from "./util/ensure-node-array";

export function cloneJSDocTemplateTag(node: TS.JSDocTemplateTag, options: CloneNodeVisitorOptions<TS.JSDocTemplateTag>): TS.JSDocTemplateTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocTemplateTag, -1, -1) as TS.JSDocTemplateTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.comment = options.hook("comment", node.comment, node.comment);
	baseNode.tagName = options.hook("tagName", options.nextNode(node.tagName), node.tagName);
	baseNode.constraint = options.hook("constraint", options.nextNode(node.constraint), node.constraint);
	baseNode.typeParameters = ensureNodeArray(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.typescript
	);

	return baseNode;
}
