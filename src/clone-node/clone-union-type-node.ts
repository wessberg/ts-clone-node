import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneUnionTypeNode(node: TS.UnionTypeNode, options: CloneNodeVisitorOptions<TS.UnionTypeNode>): TS.UnionTypeNode {
	return options.factory.createUnionTypeNode(options.hook("types", options.nextNodes(node.types), node.types));
}
