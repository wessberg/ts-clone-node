import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {ensureNodeArray} from "./util/ensure-node-array.js";
import type {Mutable} from "helpertypes";

export function cloneConstructorTypeNode(node: TS.ConstructorTypeNode, options: CloneNodeVisitorOptions<TS.ConstructorTypeNode>): TS.ConstructorTypeNode {
	const updatedNode = options.factory.createConstructorTypeNode(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	) as Mutable<TS.ConstructorTypeNode>;

	// Make sure to also update the modifiers. The constructor function doesn't support this.
	updatedNode.modifiers = ensureNodeArray(options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers), options.factory);
	return updatedNode;
}
