import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocTypeLiteral(node: Mutable<TS.JSDocTypeLiteral>, options: CloneNodeVisitorOptions<TS.JSDocTypeLiteral>): TS.JSDocTypeLiteral {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocTypeLiteral>, options: CloneNodeVisitorOptions<TS.JSDocTypeLiteral>): TS.JSDocTypeLiteral {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocTypeLiteral, -1, -1) as unknown) as Mutable<TS.JSDocTypeLiteral>;
	baseNode.jsDocPropertyTags = options.hook("jsDocPropertyTags", options.nextNodes(node.jsDocPropertyTags), node.jsDocPropertyTags);
	baseNode.isArrayType = options.hook("isArrayType", node.isArrayType, node.isArrayType);

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocTypeLiteral>, options: CloneNodeVisitorOptions<TS.JSDocTypeLiteral>): TS.JSDocTypeLiteral {
	const baseNode = options.factory.createJSDocTypeLiteral(
		options.hook("jsDocPropertyTags", options.nextNodes(node.jsDocPropertyTags), node.jsDocPropertyTags),
		options.hook("isArrayType", node.isArrayType, node.isArrayType)
	) as Mutable<TS.JSDocTypeLiteral>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
