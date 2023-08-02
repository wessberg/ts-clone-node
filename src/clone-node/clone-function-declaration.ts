import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {getModifierLikes} from "./util/get-modifier-likes.js";

export function cloneFunctionDeclaration(node: TS.FunctionDeclaration, options: CloneNodeVisitorOptions<TS.FunctionDeclaration>): TS.FunctionDeclaration {
	const modifierLikes = getModifierLikes(node);
	return options.factory.createFunctionDeclaration(
		options.hook("modifiers", options.nextNodes(modifierLikes), modifierLikes as TS.Modifier[]),
		options.hook("asteriskToken", options.nextNode(node.asteriskToken), node.asteriskToken),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
