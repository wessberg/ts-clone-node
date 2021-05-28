import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneMethodSignature(node: TS.MethodSignature, options: CloneNodeVisitorOptions<TS.MethodSignature>): TS.MethodSignature {
	return options.factory.createMethodSignature(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
