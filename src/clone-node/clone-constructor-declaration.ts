import {ConstructorDeclaration, createConstructor} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneConstructorDeclaration (node: ConstructorDeclaration, options: CloneNodeInternalOptions<ConstructorDeclaration>): ConstructorDeclaration {
	return createConstructor(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("body", cloneNode(node.body))
	);
}