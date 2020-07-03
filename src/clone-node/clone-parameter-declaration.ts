import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneParameterDeclaration(node: TS.ParameterDeclaration, options: CloneNodeVisitorOptions<TS.ParameterDeclaration>): TS.ParameterDeclaration {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ParameterDeclaration, options: CloneNodeVisitorOptions<TS.ParameterDeclaration>): TS.ParameterDeclaration {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createParameter(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators) as never,
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("dotDotDotToken", options.nextNode(node.dotDotDotToken), node.dotDotDotToken) as never,
		options.hook("name", options.nextNode(node.name), node.name) as never,
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken) as never,
		options.hook("type", options.nextNode(node.type), node.type) as never,
		options.hook("initializer", options.nextNode(node.initializer), node.initializer) as never
	) as unknown) as TS.ParameterDeclaration;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ParameterDeclaration, options: CloneNodeVisitorOptions<TS.ParameterDeclaration>): TS.ParameterDeclaration {
	return options.factory.createParameterDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("dotDotDotToken", options.nextNode(node.dotDotDotToken), node.dotDotDotToken),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
