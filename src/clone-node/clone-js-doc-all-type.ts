import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneJSDocAllType(node: TS.JSDocAllType, options: CloneNodeInternalOptions<TS.JSDocAllType>): TS.JSDocAllType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocAllType, -1, -1) as TS.JSDocAllType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));

	return baseNode;
}
