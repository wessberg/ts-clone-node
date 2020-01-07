import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {payload} from "./util/payload";

export function cloneJSDocFunctionType(node: TS.JSDocFunctionType, options: CloneNodeInternalOptions<TS.JSDocFunctionType>): TS.JSDocFunctionType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocFunctionType, -1, -1) as TS.JSDocFunctionType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));

	return baseNode;
}
