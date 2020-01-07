import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";

export function cloneJsDocClassTag(node: TS.JSDocClassTag, options: CloneNodeInternalOptions<TS.JSDocClassTag>): TS.JSDocClassTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocClassTag, -1, -1) as TS.JSDocClassTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.comment = options.hook("comment", node.comment, node.comment, payload(options));
	baseNode.tagName = options.hook("tagName", cloneNode(node.tagName, nextOptions(options)), node.tagName, payload(options));
	return baseNode;
}
