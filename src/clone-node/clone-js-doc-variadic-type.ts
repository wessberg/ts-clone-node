import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocVariadicType(node: TS.JSDocVariadicType, options: CloneNodeVisitorOptions<TS.JSDocVariadicType>): TS.JSDocVariadicType {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocVariadicType, -1, -1) as TS.JSDocVariadicType;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);

	return baseNode;
}
