import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneIntersectionTypeNode(node: TS.IntersectionTypeNode, options: CloneNodeVisitorOptions<TS.IntersectionTypeNode>): TS.IntersectionTypeNode {
	return options.factory.createIntersectionTypeNode(options.hook("types", options.nextNodes(node.types), node.types));
}
