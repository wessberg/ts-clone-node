import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneConstructorTypeNode(
	node: TS.ConstructorTypeNode,
	options: CloneNodeVisitorOptions<TS.ConstructorTypeNode>
): TS.ConstructorTypeNode {
	return options.typescript.createConstructorTypeNode(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
