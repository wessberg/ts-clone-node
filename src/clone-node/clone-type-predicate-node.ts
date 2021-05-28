import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTypePredicateNode(node: TS.TypePredicateNode, options: CloneNodeVisitorOptions<TS.TypePredicateNode>): TS.TypePredicateNode {
	return options.factory.createTypePredicateNode(
		options.hook("assertsModifier", options.nextNode(node.assertsModifier), node.assertsModifier),
		options.hook("parameterName", options.nextNode(node.parameterName), node.parameterName),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
