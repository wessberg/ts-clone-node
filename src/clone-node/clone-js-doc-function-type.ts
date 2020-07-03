import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocFunctionType(node: Mutable<TS.JSDocFunctionType>, options: CloneNodeVisitorOptions<TS.JSDocFunctionType>): TS.JSDocFunctionType {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocFunctionType>, options: CloneNodeVisitorOptions<TS.JSDocFunctionType>): TS.JSDocFunctionType {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocFunctionType, -1, -1) as unknown) as Mutable<TS.JSDocFunctionType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocFunctionType>, options: CloneNodeVisitorOptions<TS.JSDocFunctionType>): TS.JSDocFunctionType {
	const baseNode = options.factory.createJSDocFunctionType(
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", node.type, node.type)
	) as Mutable<TS.JSDocFunctionType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
