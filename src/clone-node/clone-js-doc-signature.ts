import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {TS} from "./type/ts.js";
import {Mutable} from "helpertypes";

export function cloneJsDocSignature(node: Mutable<TS.JSDocSignature>, options: CloneNodeVisitorOptions<TS.JSDocSignature>): TS.JSDocSignature {
	const baseNode = options.factory.createJSDocSignature(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	) as Mutable<TS.JSDocSignature>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
