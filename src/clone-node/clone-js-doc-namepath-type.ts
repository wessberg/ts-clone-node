import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";
import {nextOptions} from "./util/next-options";

export function cloneJSDocNamepathType(node: TS.JSDocNamepathType, options: CloneNodeInternalOptions<TS.JSDocNamepathType>): TS.JSDocNamepathType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocNamepathType, -1, -1) as TS.JSDocNamepathType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.type = options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options));

	return baseNode;
}
