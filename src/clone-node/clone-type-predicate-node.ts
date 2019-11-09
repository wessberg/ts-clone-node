import {createTypePredicateNode, TypePredicateNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneTypePredicateNode (node: TypePredicateNode, options: CloneNodeInternalOptions<TypePredicateNode>): TypePredicateNode {
	return createTypePredicateNode(
		options.hook("parameterName", cloneNode(node.parameterName)),
		options.hook("type", cloneNode(node.type))!
	);
}