import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocNamepathType(node: TS.JSDocNamepathType, options: CloneNodeVisitorOptions<TS.JSDocNamepathType>): TS.JSDocNamepathType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocNamepathType, -1, -1) as TS.JSDocNamepathType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);

	return baseNode;
}
