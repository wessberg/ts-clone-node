import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocNonNullableType(
	node: TS.JSDocNonNullableType,
	options: CloneNodeVisitorOptions<TS.JSDocNonNullableType>
): TS.JSDocNonNullableType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocNonNullableType, -1, -1) as TS.JSDocNonNullableType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);

	return baseNode;
}
