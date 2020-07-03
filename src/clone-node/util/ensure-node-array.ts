import {MetaNode} from "../type/meta-node";
import {TS} from "../type/ts";
import {isNodeArray} from "./is-node-array";

export function ensureNodeArray<T extends MetaNode>(item: T[] | TS.NodeArray<T>, factory: TS.NodeFactory): TS.NodeArray<T>;
export function ensureNodeArray<T extends MetaNode>(item: T[] | TS.NodeArray<T> | undefined, factory: TS.NodeFactory): TS.NodeArray<T> | undefined;
export function ensureNodeArray<T extends MetaNode>(item: T[] | TS.NodeArray<T> | undefined, factory: TS.NodeFactory): TS.NodeArray<T> | undefined {
	if (item == null || isNodeArray(item)) return item;
	return factory.createNodeArray(item);
}
