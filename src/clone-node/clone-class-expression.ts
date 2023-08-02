import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {getModifierLikes} from "./util/get-modifier-likes.js";

export function cloneClassExpression(node: TS.ClassExpression, options: CloneNodeVisitorOptions<TS.ClassExpression>): TS.ClassExpression {
	const modifierLikes = getModifierLikes(node);
	return options.factory.createClassExpression(
		options.hook("modifiers", options.nextNodes(modifierLikes), modifierLikes),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("heritageClauses", options.nextNodes(node.heritageClauses), node.heritageClauses),
		options.hook("members", options.nextNodes(node.members), node.members)
	);
}
