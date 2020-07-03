import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneFunctionTypeNode(node: TS.FunctionTypeNode, options: CloneNodeVisitorOptions<TS.FunctionTypeNode>): TS.FunctionTypeNode {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.FunctionTypeNode, options: CloneNodeVisitorOptions<TS.FunctionTypeNode>): TS.FunctionTypeNode {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createFunctionTypeNode(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters) as never,
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters) as never,
		options.hook("type", options.nextNode(node.type), node.type) as never
	) as unknown) as TS.FunctionTypeNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.FunctionTypeNode, options: CloneNodeVisitorOptions<TS.FunctionTypeNode>): TS.FunctionTypeNode {
	return options.factory.createFunctionTypeNode(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
