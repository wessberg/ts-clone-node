import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneIndexedAccessTypeNode(node: TS.IndexedAccessTypeNode, options: CloneNodeVisitorOptions<TS.IndexedAccessTypeNode>): TS.IndexedAccessTypeNode {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.IndexedAccessTypeNode, options: CloneNodeVisitorOptions<TS.IndexedAccessTypeNode>): TS.IndexedAccessTypeNode {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createIndexedAccessTypeNode(
		options.hook("objectType", options.nextNode(node.objectType), node.objectType) as never,
		options.hook("indexType", options.nextNode(node.indexType), node.indexType) as never
	) as unknown) as TS.IndexedAccessTypeNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.IndexedAccessTypeNode, options: CloneNodeVisitorOptions<TS.IndexedAccessTypeNode>): TS.IndexedAccessTypeNode {
	return options.factory.createIndexedAccessTypeNode(
		options.hook("objectType", options.nextNode(node.objectType), node.objectType),
		options.hook("indexType", options.nextNode(node.indexType), node.indexType)
	);
}
