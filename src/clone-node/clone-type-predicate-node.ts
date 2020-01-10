import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTypePredicateNode(node: TS.TypePredicateNode, options: CloneNodeVisitorOptions<TS.TypePredicateNode>): TS.TypePredicateNode {
	return options.typescript.createTypePredicateNode(
		options.hook("parameterName", options.nextNode(node.parameterName), node.parameterName),
		options.hook("type", options.nextNode(node.type), node.type)!
	);
}
