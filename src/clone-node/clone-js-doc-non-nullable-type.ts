import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocNonNullableType(node: Mutable<TS.JSDocNonNullableType>, options: CloneNodeVisitorOptions<TS.JSDocNonNullableType>): TS.JSDocNonNullableType {
	const baseNode = options.factory.createJSDocNonNullableType(options.hook("type", options.nextNode(node.type), node.type)) as Mutable<TS.JSDocNonNullableType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
