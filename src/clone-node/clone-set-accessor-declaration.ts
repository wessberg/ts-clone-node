import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneSetAccessorDeclaration(
	node: TS.SetAccessorDeclaration,
	options: CloneNodeVisitorOptions<TS.SetAccessorDeclaration>
): TS.SetAccessorDeclaration {
	return options.typescript.createSetAccessor(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
