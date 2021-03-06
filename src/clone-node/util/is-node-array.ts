import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

export function isNodeArray<T extends MetaNode>(item: unknown): item is TS.NodeArray<T> {
	// tslint:disable-next-line
	return item != null && Array.isArray(item) && "pos" in item;
}
