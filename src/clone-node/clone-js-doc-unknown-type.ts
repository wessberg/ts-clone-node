import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneJSDocUnknownType(node: TS.JSDocUnknownType, options: CloneNodeInternalOptions<TS.JSDocUnknownType>): TS.JSDocUnknownType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocUnknownType, -1, -1) as TS.JSDocUnknownType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));

	return baseNode;
}
