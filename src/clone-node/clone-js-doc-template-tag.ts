import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";
import {ensureNodeArray} from "./util/ensure-node-array";

export function cloneJSDocTemplateTag(node: TS.JSDocTemplateTag, options: CloneNodeInternalOptions<TS.JSDocTemplateTag>): TS.JSDocTemplateTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocTemplateTag, -1, -1) as TS.JSDocTemplateTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.comment = options.hook("comment", node.comment, node.comment, payload(options));
	baseNode.tagName = options.hook("tagName", cloneNode(node.tagName, nextOptions(options)), node.tagName, payload(options));
	baseNode.constraint = options.hook("constraint", cloneNode(node.constraint, nextOptions(options)), node.constraint, payload(options));
	baseNode.typeParameters = ensureNodeArray(
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(options)), node.typeParameters, payload(options)),
		options.typescript
	);

	return baseNode;
}
