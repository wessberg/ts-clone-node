import {createEnumDeclaration, EnumDeclaration} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneEnumDeclaration (node: EnumDeclaration, options: CloneNodeInternalOptions<EnumDeclaration>): EnumDeclaration {
	return createEnumDeclaration(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("name", cloneNode(node.name)),
		options.hook("members", cloneNodes(node.members))
	);
}