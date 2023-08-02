import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneRestTypeNode(node: TS.RestTypeNode, options: CloneNodeVisitorOptions<TS.RestTypeNode>): TS.RestTypeNode {
	return options.factory.createRestTypeNode(options.hook("type", options.nextNode(node.type), node.type));
}
