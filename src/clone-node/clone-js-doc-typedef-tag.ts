import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";

export function cloneJSDocTypedefTag(node: TS.JSDocTypedefTag, options: CloneNodeInternalOptions<TS.JSDocTypedefTag>): TS.JSDocTypedefTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocTypedefTag, -1, -1) as TS.JSDocTypedefTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.comment = options.hook("comment", node.comment, node.comment, payload(options));
	baseNode.tagName = options.hook("tagName", cloneNode(node.tagName, nextOptions(node.tagName, options)), node.tagName, payload(options));
	baseNode.fullName = options.hook("fullName", cloneNode(node.fullName, nextOptions(node.fullName, options)), node.fullName, payload(options));
	baseNode.name = options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options));
	baseNode.typeExpression = options.hook(
		"typeExpression",
		cloneNode(node.typeExpression, nextOptions(node.typeExpression, options)),
		node.typeExpression,
		payload(options)
	);

	return baseNode;
}
