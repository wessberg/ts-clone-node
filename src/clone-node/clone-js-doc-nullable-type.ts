import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocNullableType(node: Mutable<TS.JSDocNullableType>, options: CloneNodeVisitorOptions<TS.JSDocNullableType>): TS.JSDocNullableType {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocNullableType>, options: CloneNodeVisitorOptions<TS.JSDocNullableType>): TS.JSDocNullableType {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocNullableType, -1, -1) as unknown) as Mutable<TS.JSDocNullableType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocNullableType>, options: CloneNodeVisitorOptions<TS.JSDocNullableType>): TS.JSDocNullableType {
	const baseNode = options.factory.createJSDocNullableType(options.hook("type", options.nextNode(node.type), node.type)) as Mutable<TS.JSDocNullableType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
