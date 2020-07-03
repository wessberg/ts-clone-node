import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function clonePropertyDeclaration(node: TS.PropertyDeclaration, options: CloneNodeVisitorOptions<TS.PropertyDeclaration>): TS.PropertyDeclaration {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.PropertyDeclaration, options: CloneNodeVisitorOptions<TS.PropertyDeclaration>): TS.PropertyDeclaration {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createProperty(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators) as never,
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("name", options.nextNode(node.name), node.name) as never,
		node.questionToken != null
			? (options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken) as never)
			: (options.hook("exclamationToken", options.nextNode(node.exclamationToken), node.exclamationToken) as never),
		options.hook("type", options.nextNode(node.type), node.type) as never,
		options.hook("initializer", options.nextNode(node.initializer), node.initializer) as never
	) as unknown) as TS.PropertyDeclaration;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.PropertyDeclaration, options: CloneNodeVisitorOptions<TS.PropertyDeclaration>): TS.PropertyDeclaration {
	return options.factory.createPropertyDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		node.questionToken != null
			? options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken)
			: options.hook("exclamationToken", options.nextNode(node.exclamationToken), node.exclamationToken),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
