import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTypeReferenceNode(node: TS.TypeReferenceNode, options: CloneNodeVisitorOptions<TS.TypeReferenceNode>): TS.TypeReferenceNode {
	return options.factory.createTypeReferenceNode(
		options.hook("typeName", options.nextNode(node.typeName), node.typeName),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments)
	);
}
