import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneConstructorDeclaration(node: TS.ConstructorDeclaration, options: CloneNodeVisitorOptions<TS.ConstructorDeclaration>): TS.ConstructorDeclaration {
	return options.factory.createConstructorDeclaration(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
