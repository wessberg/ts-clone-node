import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTupleTypeNode(node: TS.TupleTypeNode, options: CloneNodeVisitorOptions<TS.TupleTypeNode>): TS.TupleTypeNode {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.TupleTypeNode, options: CloneNodeVisitorOptions<TS.TupleTypeNode>): TS.TupleTypeNode {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createTupleTypeNode(
		options.hook(
			"elementTypes" as never,
			options.nextNodes(((node as unknown) as {elementTypes: TS.NodeArray<TS.TypeNode | TS.NamedTupleMember>}).elementTypes),
			((node as unknown) as {elementTypes: TS.NodeArray<TS.TypeNode | TS.NamedTupleMember>}).elementTypes
		) as never
	) as unknown) as TS.TupleTypeNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.TupleTypeNode, options: CloneNodeVisitorOptions<TS.TupleTypeNode>): TS.TupleTypeNode {
	return options.factory.createTupleTypeNode(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
