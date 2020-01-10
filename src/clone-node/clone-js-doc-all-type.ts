import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocAllType(node: TS.JSDocAllType, options: CloneNodeVisitorOptions<TS.JSDocAllType>): TS.JSDocAllType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocAllType, -1, -1) as TS.JSDocAllType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
