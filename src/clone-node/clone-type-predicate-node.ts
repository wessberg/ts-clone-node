import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTypePredicateNode(node: TS.TypePredicateNode, options: CloneNodeVisitorOptions<TS.TypePredicateNode>): TS.TypePredicateNode {
	return options.factory.createTypePredicateNode(
		options.hook("assertsModifier", options.nextNode(node.assertsModifier), node.assertsModifier),
		options.hook("parameterName", options.nextNode(node.parameterName), node.parameterName),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
