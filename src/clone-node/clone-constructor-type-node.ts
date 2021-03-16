import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {ensureNodeArray} from "./util/ensure-node-array";
import {Mutable} from "./util/mutable";

export function cloneConstructorTypeNode(node: TS.ConstructorTypeNode, options: CloneNodeVisitorOptions<TS.ConstructorTypeNode>): TS.ConstructorTypeNode {
	const updatedNode = options.factory.createConstructorTypeNode(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	) as Mutable<TS.ConstructorTypeNode>;


	// Make sure to also update the modifiers. The constructor function doesn't support this.
	updatedNode.modifiers = ensureNodeArray(options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers), options.factory);
	return updatedNode;
}
