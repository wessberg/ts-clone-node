import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {ensureNodeArray} from "./util/ensure-node-array";

export function cloneMethodSignature(node: TS.MethodSignature, options: CloneNodeVisitorOptions<TS.MethodSignature>): TS.MethodSignature {
	const updatedMethodSignature = options.typescript.createMethodSignature(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken)
	);

	// Make sure to also update the modifiers
	// Workaround for: https://github.com/microsoft/TypeScript/issues/35959
	updatedMethodSignature.modifiers = ensureNodeArray(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.typescript
	);
	return updatedMethodSignature;
}
