import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneEnumDeclaration(node: TS.EnumDeclaration, options: CloneNodeVisitorOptions<TS.EnumDeclaration>): TS.EnumDeclaration {
	return options.factory.createEnumDeclaration(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("members", options.nextNodes(node.members), node.members)
	);
}
