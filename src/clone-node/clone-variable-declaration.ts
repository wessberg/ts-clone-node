import {createVariableDeclaration, VariableDeclaration} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneVariableDeclaration (node: VariableDeclaration, options: CloneNodeInternalOptions<VariableDeclaration>): VariableDeclaration {
	return createVariableDeclaration(
		options.hook("name", cloneNode(node.name)),
		options.hook("type", cloneNode(node.type)),
		options.hook("initializer", cloneNode(node.initializer))
	);
}