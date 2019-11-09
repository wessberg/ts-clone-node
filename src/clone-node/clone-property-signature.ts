import {createPropertySignature, PropertySignature} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function clonePropertySignature (node: PropertySignature, options: CloneNodeInternalOptions<PropertySignature>): PropertySignature {
	return createPropertySignature(
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("name", cloneNode(node.name)),
		options.hook("questionToken", cloneNode(node.questionToken)),
		options.hook("type", cloneNode(node.type)),
		options.hook("initializer", cloneNode(node.initializer))
	);
}