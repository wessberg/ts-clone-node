import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneIntersectionTypeNode(node: TS.IntersectionTypeNode, options: CloneNodeVisitorOptions<TS.IntersectionTypeNode>): TS.IntersectionTypeNode {
	return options.factory.createIntersectionTypeNode(options.hook("types", options.nextNodes(node.types), node.types));
}
