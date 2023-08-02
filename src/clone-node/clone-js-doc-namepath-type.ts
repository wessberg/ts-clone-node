import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocNamepathType(node: Mutable<TS.JSDocNamepathType>, options: CloneNodeVisitorOptions<TS.JSDocNamepathType>): TS.JSDocNamepathType {
	const baseNode = options.factory.createJSDocNamepathType(options.hook("type", options.nextNode(node.type), node.type)) as Mutable<TS.JSDocNamepathType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
