import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneJsDocVariadicType(node: Mutable<TS.JSDocVariadicType>, options: CloneNodeVisitorOptions<TS.JSDocVariadicType>): TS.JSDocVariadicType {
	const baseNode = options.factory.createJSDocVariadicType(options.hook("type", options.nextNode(node.type), node.type)) as Mutable<TS.JSDocVariadicType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
