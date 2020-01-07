import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";

export function cloneJSDocThisTag(node: TS.JSDocThisTag, options: CloneNodeInternalOptions<TS.JSDocThisTag>): TS.JSDocThisTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocThisTag, -1, -1) as TS.JSDocThisTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.comment = options.hook("comment", node.comment, node.comment, payload(options));
	baseNode.tagName = options.hook("tagName", cloneNode(node.tagName, nextOptions(options)), node.tagName, payload(options));
	baseNode.typeExpression = options.hook(
		"typeExpression",
		cloneNode(node.typeExpression, nextOptions(options)),
		node.typeExpression,
		payload(options)
	);

	return baseNode;
}
