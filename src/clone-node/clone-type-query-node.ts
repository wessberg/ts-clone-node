import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTypeQueryNode(node: TS.TypeQueryNode, options: CloneNodeVisitorOptions<TS.TypeQueryNode>): TS.TypeQueryNode {
	return options.factory.createTypeQueryNode(options.hook("exprName", options.nextNode(node.exprName), node.exprName));
}
