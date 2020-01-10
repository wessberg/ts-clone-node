import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocNullableType(node: TS.JSDocNullableType, options: CloneNodeVisitorOptions<TS.JSDocNullableType>): TS.JSDocNullableType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocNullableType, -1, -1) as TS.JSDocNullableType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);

	return baseNode;
}
