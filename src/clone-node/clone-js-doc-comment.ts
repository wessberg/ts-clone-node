import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {ensureNodeArray} from "./util/ensure-node-array";
import {Mutable} from "helpertypes";

export function cloneJsDoc(node: Mutable<TS.JSDoc>, options: CloneNodeVisitorOptions<TS.JSDoc>): TS.JSDoc {
	const baseNode = options.factory.createJSDocComment(
		options.hook("comment", node.comment, node.comment),
		ensureNodeArray(options.hook("tags", options.nextNodes(node.tags), node.tags), options.factory)
	) as Mutable<TS.JSDoc>;

	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
