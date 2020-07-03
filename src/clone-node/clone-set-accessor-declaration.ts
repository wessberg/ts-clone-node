import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneSetAccessorDeclaration(node: TS.SetAccessorDeclaration, options: CloneNodeVisitorOptions<TS.SetAccessorDeclaration>): TS.SetAccessorDeclaration {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.SetAccessorDeclaration, options: CloneNodeVisitorOptions<TS.SetAccessorDeclaration>): TS.SetAccessorDeclaration {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createSetAccessor(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators) as never,
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("name", options.nextNode(node.name), node.name) as never,
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters) as never,
		options.hook("body", options.nextNode(node.body), node.body) as never
	) as unknown) as TS.SetAccessorDeclaration;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.SetAccessorDeclaration, options: CloneNodeVisitorOptions<TS.SetAccessorDeclaration>): TS.SetAccessorDeclaration {
	return options.factory.createSetAccessorDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
