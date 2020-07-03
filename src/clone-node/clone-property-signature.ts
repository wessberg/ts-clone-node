import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function clonePropertySignature(node: TS.PropertySignature, options: CloneNodeVisitorOptions<TS.PropertySignature>): TS.PropertySignature {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.PropertySignature, options: CloneNodeVisitorOptions<TS.PropertySignature>): TS.PropertySignature {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createPropertySignature(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers) as never,
		options.hook("name", options.nextNode(node.name), node.name) as never,
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken) as never,
		options.hook("type", options.nextNode(node.type), node.type) as never,
		options.hook("initializer", options.nextNode(node.initializer), node.initializer) as never
	) as unknown) as TS.PropertySignature;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.PropertySignature, options: CloneNodeVisitorOptions<TS.PropertySignature>): TS.PropertySignature {
	return options.factory.createPropertySignature(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
