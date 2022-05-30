import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocAllType(node: Mutable<TS.JSDocAllType>, options: CloneNodeVisitorOptions<TS.JSDocAllType>): TS.JSDocAllType {
	const baseNode = options.factory.createJSDocAllType() as Mutable<TS.JSDocAllType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
