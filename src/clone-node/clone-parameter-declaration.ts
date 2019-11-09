import {createParameter, ParameterDeclaration} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneParameterDeclaration (node: ParameterDeclaration, options: CloneNodeInternalOptions<ParameterDeclaration>): ParameterDeclaration {
	return createParameter(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("dotDotDotToken", cloneNode(node.dotDotDotToken)),
		options.hook("name", cloneNode(node.name)),
		options.hook("questionToken", cloneNode(node.questionToken)),
		options.hook("type", cloneNode(node.type)),
		options.hook("initializer", cloneNode(node.initializer))
	);
}