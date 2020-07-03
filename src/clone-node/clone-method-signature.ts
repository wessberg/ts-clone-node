import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {ensureNodeArray} from "./util/ensure-node-array";
import {Mutable} from "./util/mutable";

export function cloneMethodSignature(node: TS.MethodSignature, options: CloneNodeVisitorOptions<TS.MethodSignature>): TS.MethodSignature {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.MethodSignature, options: CloneNodeVisitorOptions<TS.MethodSignature>): TS.MethodSignature {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	const updatedMethodSignature = (typescript.createMethodSignature(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters) as never,
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters) as never,
		options.hook("type", options.nextNode(node.type), node.type) as never,
		options.hook("name", options.nextNode(node.name), node.name) as never,
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken) as never
	) as unknown) as Mutable<TS.MethodSignature>;

	// Make sure to also update the modifiers
	// Workaround for: https://github.com/microsoft/TypeScript/issues/35959
	updatedMethodSignature.modifiers = ensureNodeArray(options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers), options.factory);
	return updatedMethodSignature;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.MethodSignature, options: CloneNodeVisitorOptions<TS.MethodSignature>): TS.MethodSignature {
	return options.factory.createMethodSignature(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
