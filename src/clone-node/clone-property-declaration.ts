import {createProperty, PropertyDeclaration} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function clonePropertyDeclaration (node: PropertyDeclaration, options: CloneNodeInternalOptions<PropertyDeclaration>): PropertyDeclaration {
	return createProperty(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("name", cloneNode(node.name)),
		node.questionToken != null
			? options.hook("questionToken", cloneNode(node.questionToken))
			: options.hook("exclamationToken", cloneNode(node.exclamationToken)),
		options.hook("type", cloneNode(node.type)),
		options.hook("initializer", cloneNode(node.initializer))
	);
}