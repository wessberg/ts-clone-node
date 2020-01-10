import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocOptionalType(node: TS.JSDocOptionalType, options: CloneNodeVisitorOptions<TS.JSDocOptionalType>): TS.JSDocOptionalType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocOptionalType, -1, -1) as TS.JSDocOptionalType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);

	return baseNode;
}
