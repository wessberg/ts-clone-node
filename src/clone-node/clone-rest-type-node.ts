import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneRestTypeNode(node: TS.RestTypeNode, options: CloneNodeVisitorOptions<TS.RestTypeNode>): TS.RestTypeNode {
	return options.factory.createRestTypeNode(options.hook("type", options.nextNode(node.type), node.type));
}
