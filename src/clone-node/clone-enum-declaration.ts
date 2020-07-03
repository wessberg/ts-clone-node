import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneEnumDeclaration(node: TS.EnumDeclaration, options: CloneNodeVisitorOptions<TS.EnumDeclaration>): TS.EnumDeclaration {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.EnumDeclaration, options: CloneNodeVisitorOptions<TS.EnumDeclaration>): TS.EnumDeclaration {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");
	return (typescript.createEnumDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators) as never,
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("name", options.nextNode(node.name), node.name) as never,
		options.hook("members", options.nextNodes(node.members), node.members) as never
	) as unknown) as TS.EnumDeclaration;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.EnumDeclaration, options: CloneNodeVisitorOptions<TS.EnumDeclaration>): TS.EnumDeclaration {
	return options.factory.createEnumDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("members", options.nextNodes(node.members), node.members)
	);
}
