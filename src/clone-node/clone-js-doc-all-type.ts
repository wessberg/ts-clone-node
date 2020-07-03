import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocAllType(node: Mutable<TS.JSDocAllType>, options: CloneNodeVisitorOptions<TS.JSDocAllType>): TS.JSDocAllType {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocAllType>, options: CloneNodeVisitorOptions<TS.JSDocAllType>): TS.JSDocAllType {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocAllType, -1, -1) as unknown) as Mutable<TS.JSDocAllType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocAllType>, options: CloneNodeVisitorOptions<TS.JSDocAllType>): TS.JSDocAllType {
	const baseNode = options.factory.createJSDocAllType() as Mutable<TS.JSDocAllType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
