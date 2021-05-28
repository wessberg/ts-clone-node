import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneConstructorDeclaration(node: TS.ConstructorDeclaration, options: CloneNodeVisitorOptions<TS.ConstructorDeclaration>): TS.ConstructorDeclaration {
	return options.factory.createConstructorDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
