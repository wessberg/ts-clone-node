import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {TS} from "./type/ts.js";

export function cloneTypeParameterDeclaration(node: TS.TypeParameterDeclaration, options: CloneNodeVisitorOptions<TS.TypeParameterDeclaration>): TS.TypeParameterDeclaration {
	return options.factory.createTypeParameterDeclaration(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("constraint", options.nextNode(node.constraint), node.constraint),
		options.hook("default", options.nextNode(node.default), node.default)
	);
}
