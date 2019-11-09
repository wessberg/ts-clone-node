import {createTypeQueryNode, TypeQueryNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneTypeQueryNode (node: TypeQueryNode, options: CloneNodeInternalOptions<TypeQueryNode>): TypeQueryNode {
	return createTypeQueryNode(
		options.hook("exprName", cloneNode(node.exprName))
	);
}