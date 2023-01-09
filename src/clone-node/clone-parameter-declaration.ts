import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import { getModifierLikes } from "./util/get-modifier-likes.js";

export function cloneParameterDeclaration(node: TS.ParameterDeclaration, options: CloneNodeVisitorOptions<TS.ParameterDeclaration>): TS.ParameterDeclaration {
	const modifierLikes = getModifierLikes(node);
	return options.factory.createParameterDeclaration(
		options.hook("modifiers", options.nextNodes(modifierLikes), modifierLikes),
		options.hook("dotDotDotToken", options.nextNode(node.dotDotDotToken), node.dotDotDotToken),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
