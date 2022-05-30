import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocTypeLiteral(node: Mutable<TS.JSDocTypeLiteral>, options: CloneNodeVisitorOptions<TS.JSDocTypeLiteral>): TS.JSDocTypeLiteral {
	const baseNode = options.factory.createJSDocTypeLiteral(
		options.hook("jsDocPropertyTags", options.nextNodes(node.jsDocPropertyTags), node.jsDocPropertyTags),
		options.hook("isArrayType", node.isArrayType, node.isArrayType)
	) as Mutable<TS.JSDocTypeLiteral>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
