import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";

export function cloneJSDocAugmentsTag(node: TS.JSDocAugmentsTag, options: CloneNodeInternalOptions<TS.JSDocAugmentsTag>): TS.JSDocAugmentsTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocAugmentsTag, -1, -1) as TS.JSDocAugmentsTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.comment = options.hook("comment", node.comment, node.comment, payload(options));
	baseNode.tagName = options.hook("tagName", cloneNode(node.tagName, nextOptions(node.tagName, options)), node.tagName, payload(options));
	baseNode.class = options.hook("class", cloneNode(node.class, nextOptions(node.class, options)), node.class, payload(options));
	return baseNode;
}
