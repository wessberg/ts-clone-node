import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";

export function cloneJsDocAuthorTag(node: TS.JSDocAuthorTag, options: CloneNodeInternalOptions<TS.JSDocAuthorTag>): TS.JSDocAuthorTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocAuthorTag, -1, -1) as TS.JSDocAuthorTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.comment = options.hook("comment", node.comment, node.comment, payload(options));
	baseNode.tagName = options.hook("tagName", cloneNode(node.tagName, nextOptions(node.tagName, options)), node.tagName, payload(options));
	return baseNode;
}
