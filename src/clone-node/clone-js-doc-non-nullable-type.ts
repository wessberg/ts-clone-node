import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocNonNullableType(node: Mutable<TS.JSDocNonNullableType>, options: CloneNodeVisitorOptions<TS.JSDocNonNullableType>): TS.JSDocNonNullableType {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocNonNullableType>, options: CloneNodeVisitorOptions<TS.JSDocNonNullableType>): TS.JSDocNonNullableType {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocNonNullableType, -1, -1) as unknown) as Mutable<TS.JSDocNonNullableType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocNonNullableType>, options: CloneNodeVisitorOptions<TS.JSDocNonNullableType>): TS.JSDocNonNullableType {
	const baseNode = options.factory.createJSDocNonNullableType(options.hook("type", options.nextNode(node.type), node.type)) as Mutable<TS.JSDocNonNullableType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
