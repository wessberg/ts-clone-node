import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneMethodDeclaration(node: TS.MethodDeclaration, options: CloneNodeVisitorOptions<TS.MethodDeclaration>): TS.MethodDeclaration {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.MethodDeclaration, options: CloneNodeVisitorOptions<TS.MethodDeclaration>): TS.MethodDeclaration {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createMethod(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators) as never,
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("asteriskToken", options.nextNode(node.asteriskToken), node.asteriskToken) as never,
		options.hook("name", options.nextNode(node.name), node.name) as never,
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken) as never,
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters) as never,
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters) as never,
		options.hook("type", options.nextNode(node.type), node.type) as never,
		options.hook("body", options.nextNode(node.body), node.body) as never
	) as unknown) as TS.MethodDeclaration;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.MethodDeclaration, options: CloneNodeVisitorOptions<TS.MethodDeclaration>): TS.MethodDeclaration {
	return options.factory.createMethodDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("asteriskToken", options.nextNode(node.asteriskToken), node.asteriskToken),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
