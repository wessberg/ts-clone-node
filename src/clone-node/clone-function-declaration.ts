import {createFunctionDeclaration, FunctionDeclaration} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneFunctionDeclaration (node: FunctionDeclaration, options: CloneNodeInternalOptions<FunctionDeclaration>): FunctionDeclaration {
	return createFunctionDeclaration(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("asteriskToken", cloneNode(node.asteriskToken)),
		options.hook("name", cloneNode(node.name)),
		options.hook("typeParameters", cloneNodes(node.typeParameters)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("type", cloneNode(node.type)),
		options.hook("body", cloneNode(node.body))
	);
}