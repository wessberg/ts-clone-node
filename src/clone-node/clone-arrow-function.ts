import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneArrowFunction(node: TS.ArrowFunction, options: CloneNodeVisitorOptions<TS.ArrowFunction>): TS.ArrowFunction {
	return options.typescript.createArrowFunction(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("equalsGreaterThanToken", options.nextNode(node.equalsGreaterThanToken), node.equalsGreaterThanToken),
		options.hook("body", options.nextNode(node.body), node.body)
	);
}
