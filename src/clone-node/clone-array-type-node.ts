import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneArrayTypeNode(node: TS.ArrayTypeNode, options: CloneNodeVisitorOptions<TS.ArrayTypeNode>): TS.ArrayTypeNode {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ArrayTypeNode, options: CloneNodeVisitorOptions<TS.ArrayTypeNode>): TS.ArrayTypeNode {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createArrayTypeNode(options.hook("elementType", node.elementType, node.elementType) as never) as unknown) as TS.ArrayTypeNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ArrayTypeNode, options: CloneNodeVisitorOptions<TS.ArrayTypeNode>): TS.ArrayTypeNode {
	return options.factory.createArrayTypeNode(options.hook("elementType", node.elementType, node.elementType));
}
