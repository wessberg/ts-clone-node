import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneSatisfiesExpression(node: TS.SatisfiesExpression, options: CloneNodeVisitorOptions<TS.SatisfiesExpression>): TS.SatisfiesExpression {
	return options.factory.createSatisfiesExpression(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
