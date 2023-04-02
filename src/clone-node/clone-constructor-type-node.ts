import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {ensureNodeArray} from "./util/ensure-node-array.js";
import {Mutable} from "helpertypes";

export function cloneConstructorTypeNode(node: TS.ConstructorTypeNode, options: CloneNodeVisitorOptions<TS.ConstructorTypeNode>): TS.ConstructorTypeNode {
	if ("canHaveDecorators" in options.typescript) {
		return options.factory.createConstructorTypeNode(
			ensureNodeArray(options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers), options.factory),
			options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
			options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
			options.hook("type", options.nextNode(node.type), node.type),
		) as Mutable<TS.ConstructorTypeNode>;
	}
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const updatedNode = options.factory.createConstructorTypeNode(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	) as Mutable<TS.ConstructorTypeNode>;

	// Make sure to also update the modifiers. The constructor function doesn't support this.
	updatedNode.modifiers = ensureNodeArray(options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers), options.factory);
	return updatedNode;
}
