import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneVariableDeclaration(node: TS.VariableDeclaration, options: CloneNodeVisitorOptions<TS.VariableDeclaration>): TS.VariableDeclaration {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.VariableDeclaration, options: CloneNodeVisitorOptions<TS.VariableDeclaration>): TS.VariableDeclaration {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createVariableDeclaration(
		options.hook("name", options.nextNode(node.name), node.name) as never,
		options.hook("type", options.nextNode(node.type), node.type) as never,
		options.hook("initializer", options.nextNode(node.initializer), node.initializer) as never
	) as unknown) as TS.VariableDeclaration;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.VariableDeclaration, options: CloneNodeVisitorOptions<TS.VariableDeclaration>): TS.VariableDeclaration {
	return options.factory.createVariableDeclaration(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("exclamationToken", options.nextNode(node.exclamationToken), node.exclamationToken),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
