import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocFunctionType(node: TS.JSDocFunctionType, options: CloneNodeVisitorOptions<TS.JSDocFunctionType>): TS.JSDocFunctionType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocFunctionType, -1, -1) as TS.JSDocFunctionType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
