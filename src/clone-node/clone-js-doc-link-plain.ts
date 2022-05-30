import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {Mutable} from "helpertypes";

export function cloneJsDocLinkPlain(node: Mutable<TS.JSDocLinkPlain>, options: CloneNodeVisitorOptions<TS.JSDocLinkPlain>): TS.JSDocLinkPlain {
	const baseNode = options.factory.createJSDocLinkPlain(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("text", node.text, node.text)
	) as Mutable<TS.JSDocLinkPlain>;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
