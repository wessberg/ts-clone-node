import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "helpertypes";

export function cloneJsDocUnknownType(node: Mutable<TS.JSDocUnknownType>, options: CloneNodeVisitorOptions<TS.JSDocUnknownType>): TS.JSDocUnknownType {
	const baseNode = options.factory.createJSDocUnknownType() as Mutable<TS.JSDocUnknownType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
