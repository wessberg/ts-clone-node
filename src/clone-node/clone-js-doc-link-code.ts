import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocLinkCode(node: Mutable<TS.JSDocLinkCode>, options: CloneNodeVisitorOptions<TS.JSDocLinkCode>): TS.JSDocLinkCode {
	const baseNode = options.factory.createJSDocLinkCode(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("text", node.text, node.text)
	) as Mutable<TS.JSDocLinkCode>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
