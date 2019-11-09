import {createTypeParameterDeclaration, TypeParameterDeclaration} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneTypeParameterDeclaration (node: TypeParameterDeclaration, options: CloneNodeInternalOptions<TypeParameterDeclaration>): TypeParameterDeclaration {
	return createTypeParameterDeclaration(
		options.hook("name", cloneNode(node.name)),
		options.hook("constraint", cloneNode(node.constraint)),
		options.hook("default", cloneNode(node.default))
	);
}

