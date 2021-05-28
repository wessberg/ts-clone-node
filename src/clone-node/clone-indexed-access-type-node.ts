import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneIndexedAccessTypeNode(node: TS.IndexedAccessTypeNode, options: CloneNodeVisitorOptions<TS.IndexedAccessTypeNode>): TS.IndexedAccessTypeNode {
	return options.factory.createIndexedAccessTypeNode(
		options.hook("objectType", options.nextNode(node.objectType), node.objectType),
		options.hook("indexType", options.nextNode(node.indexType), node.indexType)
	);
}
