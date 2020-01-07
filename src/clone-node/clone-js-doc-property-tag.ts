import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";

export function cloneJSDocPropertyTag(node: TS.JSDocPropertyTag, options: CloneNodeInternalOptions<TS.JSDocPropertyTag>): TS.JSDocPropertyTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocPropertyTag, -1, -1) as TS.JSDocPropertyTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.comment = options.hook("comment", node.comment, node.comment, payload(options));
	baseNode.tagName = options.hook("tagName", cloneNode(node.tagName, nextOptions(options)), node.tagName, payload(options));
	baseNode.name = options.hook("name", cloneNode(node.name, nextOptions(options)), node.name, payload(options));
	baseNode.typeExpression = options.hook(
		"typeExpression",
		cloneNode(node.typeExpression, nextOptions(options)),
		node.typeExpression,
		payload(options)
	);
	baseNode.isNameFirst = options.hook("isNameFirst", node.isNameFirst, node.isNameFirst, payload(options));
	baseNode.isBracketed = options.hook("isBracketed", node.isBracketed, node.isBracketed, payload(options));

	return baseNode;
}
