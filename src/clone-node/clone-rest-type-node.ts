import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneRestTypeNode(node: TS.RestTypeNode, options: CloneNodeVisitorOptions<TS.RestTypeNode>): TS.RestTypeNode {
	return options.factory.createRestTypeNode(options.hook("type", options.nextNode(node.type), node.type));
}
