import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneTypeParameterDeclaration(
	node: TS.TypeParameterDeclaration,
	options: CloneNodeVisitorOptions<TS.TypeParameterDeclaration>
): TS.TypeParameterDeclaration {
	return options.typescript.createTypeParameterDeclaration(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("constraint", options.nextNode(node.constraint), node.constraint),
		options.hook("default", options.nextNode(node.default), node.default)
	);
}
