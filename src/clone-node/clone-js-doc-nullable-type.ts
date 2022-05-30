import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocNullableType(node: Mutable<TS.JSDocNullableType>, options: CloneNodeVisitorOptions<TS.JSDocNullableType>): TS.JSDocNullableType {
	const baseNode = options.factory.createJSDocNullableType(options.hook("type", options.nextNode(node.type), node.type)) as Mutable<TS.JSDocNullableType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
