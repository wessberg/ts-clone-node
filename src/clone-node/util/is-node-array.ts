import type {TS} from "../type/ts.js";
import type {MetaNode} from "../type/meta-node.js";

export function isNodeArray<T extends MetaNode>(item: unknown): item is TS.NodeArray<T> {
	return item != null && Array.isArray(item) && "pos" in item;
}
