import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocUnknownType(node: TS.JSDocUnknownType, options: CloneNodeVisitorOptions<TS.JSDocUnknownType>): TS.JSDocUnknownType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocUnknownType, -1, -1) as TS.JSDocUnknownType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
