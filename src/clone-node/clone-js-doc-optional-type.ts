import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocOptionalType(node: Mutable<TS.JSDocOptionalType>, options: CloneNodeVisitorOptions<TS.JSDocOptionalType>): TS.JSDocOptionalType {
	const baseNode = options.factory.createJSDocOptionalType(options.hook("type", options.nextNode(node.type), node.type)) as Mutable<TS.JSDocOptionalType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
