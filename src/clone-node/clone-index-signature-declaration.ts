import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneIndexSignatureDeclaration(node: TS.IndexSignatureDeclaration, options: CloneNodeVisitorOptions<TS.IndexSignatureDeclaration>): TS.IndexSignatureDeclaration {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.IndexSignatureDeclaration, options: CloneNodeVisitorOptions<TS.IndexSignatureDeclaration>): TS.IndexSignatureDeclaration {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createIndexSignature(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators) as never,
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters) as never,
		options.hook("type", options.nextNode(node.type), node.type)! as never
	) as unknown) as TS.IndexSignatureDeclaration;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.IndexSignatureDeclaration, options: CloneNodeVisitorOptions<TS.IndexSignatureDeclaration>): TS.IndexSignatureDeclaration {
	return options.factory.createIndexSignature(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)!
	);
}
