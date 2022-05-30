import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocFunctionType(node: Mutable<TS.JSDocFunctionType>, options: CloneNodeVisitorOptions<TS.JSDocFunctionType>): TS.JSDocFunctionType {
	const baseNode = options.factory.createJSDocFunctionType(
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", node.type, node.type)
	) as Mutable<TS.JSDocFunctionType>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
