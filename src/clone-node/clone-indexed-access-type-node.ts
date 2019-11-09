import {createIndexedAccessTypeNode, IndexedAccessTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneIndexedAccessTypeNode (node: IndexedAccessTypeNode, options: CloneNodeInternalOptions<IndexedAccessTypeNode>): IndexedAccessTypeNode {
	return createIndexedAccessTypeNode(
		options.hook("objectType", cloneNode(node.objectType)),
		options.hook("indexType", cloneNode(node.indexType))
	);
}