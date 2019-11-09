import {createInterfaceDeclaration, InterfaceDeclaration} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneInterfaceDeclaration (node: InterfaceDeclaration, options: CloneNodeInternalOptions<InterfaceDeclaration>): InterfaceDeclaration {
	return createInterfaceDeclaration(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("name", cloneNode(node.name)),
		options.hook("typeParameters", cloneNodes(node.typeParameters)),
		options.hook("heritageClauses", cloneNodes(node.heritageClauses)),
		options.hook("members", cloneNodes(node.members))
	);
}