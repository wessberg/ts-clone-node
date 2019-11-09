import {createGetAccessor, GetAccessorDeclaration} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneGetAccessorDeclaration (node: GetAccessorDeclaration, options: CloneNodeInternalOptions<GetAccessorDeclaration>): GetAccessorDeclaration {
	return createGetAccessor(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("name", cloneNode(node.name)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("type", cloneNode(node.type)),
		options.hook("body", cloneNode(node.body))
	);
}