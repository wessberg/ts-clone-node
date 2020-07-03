import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneJsDocOptionalType(node: Mutable<TS.JSDocOptionalType>, options: CloneNodeVisitorOptions<TS.JSDocOptionalType>): TS.JSDocOptionalType {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: Mutable<TS.JSDocOptionalType>, options: CloneNodeVisitorOptions<TS.JSDocOptionalType>): TS.JSDocOptionalType {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	const baseNode = (typescript.createNode(typescript.SyntaxKind.JSDocOptionalType, -1, -1) as unknown) as Mutable<TS.JSDocOptionalType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);

	return baseNode;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: Mutable<TS.JSDocOptionalType>, options: CloneNodeVisitorOptions<TS.JSDocOptionalType>): TS.JSDocOptionalType {
	const baseNode = options.factory.createJSDocOptionalType(options.hook("type", options.nextNode(node.type), node.type)) as Mutable<TS.JSDocOptionalType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
