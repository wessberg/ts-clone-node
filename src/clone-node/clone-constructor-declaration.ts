import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneConstructorDeclaration(node: TS.ConstructorDeclaration, options: CloneNodeVisitorOptions<TS.ConstructorDeclaration>): TS.ConstructorDeclaration {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ConstructorDeclaration, options: CloneNodeVisitorOptions<TS.ConstructorDeclaration>): TS.ConstructorDeclaration {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createConstructor(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators) as never,
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters) as never,
		options.hook("body", options.nextNode(node.body), node.body) as never
	) as unknown) as TS.ConstructorDeclaration;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ConstructorDeclaration, options: CloneNodeVisitorOptions<TS.ConstructorDeclaration>): TS.ConstructorDeclaration {
	return options.factory.createConstructorDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
