import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneUnionTypeNode(node: TS.UnionTypeNode, options: CloneNodeVisitorOptions<TS.UnionTypeNode>): TS.UnionTypeNode {
	return options.factory.createUnionTypeNode(options.hook("types", options.nextNodes(node.types), node.types));
}
