import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "helpertypes";

export function cloneJsDocLink(node: Mutable<TS.JSDocLink>, options: CloneNodeVisitorOptions<TS.JSDocLink>): TS.JSDocLink {
	const baseNode = options.factory.createJSDocLink(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("text", node.text, node.text)
	) as Mutable<TS.JSDocLink>;

	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));

	return baseNode;
}
