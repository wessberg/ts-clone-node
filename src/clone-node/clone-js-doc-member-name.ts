import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocMemberName(node: Mutable<TS.JSDocMemberName>, options: CloneNodeVisitorOptions<TS.JSDocMemberName>): TS.JSDocMemberName {
	const baseNode = options.factory.createJSDocMemberName(
		options.hook("left", options.nextNode(node.left), node.left),
		options.hook("right", options.nextNode(node.right), node.right)
	) as Mutable<TS.JSDocMemberName>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
