import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneFunctionDeclaration(node: TS.FunctionDeclaration, options: CloneNodeVisitorOptions<TS.FunctionDeclaration>): TS.FunctionDeclaration {
	return options.factory.createFunctionDeclaration(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("asteriskToken", options.nextNode(node.asteriskToken), node.asteriskToken),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
