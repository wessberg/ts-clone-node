import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTypeQueryNode(node: TS.TypeQueryNode, options: CloneNodeVisitorOptions<TS.TypeQueryNode>): TS.TypeQueryNode {
	return options.typescript.createTypeQueryNode(options.hook("exprName", options.nextNode(node.exprName), node.exprName));
}
