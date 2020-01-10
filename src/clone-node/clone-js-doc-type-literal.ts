import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneJSDocTypeLiteral(node: TS.JSDocTypeLiteral, options: CloneNodeVisitorOptions<TS.JSDocTypeLiteral>): TS.JSDocTypeLiteral {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocTypeLiteral, -1, -1) as TS.JSDocTypeLiteral;
	baseNode.jsDocPropertyTags = options.hook("jsDocPropertyTags", options.nextNodes(node.jsDocPropertyTags), node.jsDocPropertyTags);
	baseNode.isArrayType = options.hook("isArrayType", node.isArrayType, node.isArrayType);

	return baseNode;
}
