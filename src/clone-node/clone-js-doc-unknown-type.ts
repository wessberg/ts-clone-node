import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocUnknownType(node: Mutable<TS.JSDocUnknownType>, options: CloneNodeVisitorOptions<TS.JSDocUnknownType>): TS.JSDocUnknownType {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocUnknownType>, options: CloneNodeVisitorOptions<TS.JSDocUnknownType>): TS.JSDocUnknownType {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocUnknownType, -1, -1) as unknown) as Mutable<TS.JSDocUnknownType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocUnknownType>, options: CloneNodeVisitorOptions<TS.JSDocUnknownType>): TS.JSDocUnknownType {
	const baseNode = options.factory.createJSDocUnknownType() as Mutable<TS.JSDocUnknownType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
