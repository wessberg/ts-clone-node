import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTypeReferenceNode(node: TS.TypeReferenceNode, options: CloneNodeVisitorOptions<TS.TypeReferenceNode>): TS.TypeReferenceNode {
	return options.factory.createTypeReferenceNode(
		options.hook("typeName", options.nextNode(node.typeName), node.typeName),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments)
	);
}
