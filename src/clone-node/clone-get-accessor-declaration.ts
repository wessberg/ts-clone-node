import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {getModifierLikes} from "./util/get-modifier-likes.js";

export function cloneGetAccessorDeclaration(node: TS.GetAccessorDeclaration, options: CloneNodeVisitorOptions<TS.GetAccessorDeclaration>): TS.GetAccessorDeclaration {
	const modifierLikes = getModifierLikes(node);
	return options.factory.createGetAccessorDeclaration(
		options.hook("modifiers", options.nextNodes(modifierLikes), modifierLikes),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
