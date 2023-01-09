import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneSetAccessorDeclaration(node: TS.SetAccessorDeclaration, options: CloneNodeVisitorOptions<TS.SetAccessorDeclaration>): TS.SetAccessorDeclaration {
	return options.factory.createSetAccessorDeclaration(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
