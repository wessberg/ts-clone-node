import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import { getModifierLikes } from "./util/get-modifier-likes.js";

export function cloneMethodDeclaration(node: TS.MethodDeclaration, options: CloneNodeVisitorOptions<TS.MethodDeclaration>): TS.MethodDeclaration {
	const modifierLikes = getModifierLikes(node);
	return options.factory.createMethodDeclaration(
		options.hook("modifiers", options.nextNodes(modifierLikes), modifierLikes),
		options.hook("asteriskToken", options.nextNode(node.asteriskToken), node.asteriskToken),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
