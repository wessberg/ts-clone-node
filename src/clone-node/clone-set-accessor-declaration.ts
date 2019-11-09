import {createSetAccessor, SetAccessorDeclaration} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneSetAccessorDeclaration (node: SetAccessorDeclaration, options: CloneNodeInternalOptions<SetAccessorDeclaration>): SetAccessorDeclaration {
	return createSetAccessor(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("name", cloneNode(node.name)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("body", cloneNode(node.body))
	);
}