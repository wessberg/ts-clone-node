import {createTypeAliasDeclaration, TypeAliasDeclaration} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneTypeAliasDeclaration (node: TypeAliasDeclaration, options: CloneNodeInternalOptions<TypeAliasDeclaration>): TypeAliasDeclaration {
	return createTypeAliasDeclaration(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("name", cloneNode(node.name)),
		options.hook("typeParameters", cloneNodes(node.typeParameters)),
		options.hook("type", cloneNode(node.type))
	);
}

