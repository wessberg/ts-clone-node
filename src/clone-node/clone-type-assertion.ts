import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTypeAssertion(node: TS.TypeAssertion, options: CloneNodeVisitorOptions<TS.TypeAssertion>): TS.TypeAssertion {
	return options.factory.createTypeAssertion(
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("expression", options.nextNode(node.expression), node.expression)
	);
}
