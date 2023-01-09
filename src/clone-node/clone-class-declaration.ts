import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {getModifierLikes} from "./util/get-modifier-likes.js";

export function cloneClassDeclaration(node: TS.ClassDeclaration, options: CloneNodeVisitorOptions<TS.ClassDeclaration>): TS.ClassDeclaration {
	const modifierLikes = getModifierLikes(node);
	return options.factory.createClassDeclaration(
		options.hook("modifiers", options.nextNodes(modifierLikes), modifierLikes),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("heritageClauses", options.nextNodes(node.heritageClauses), node.heritageClauses),
		options.hook("members", options.nextNodes(node.members), node.members)
	);
}
