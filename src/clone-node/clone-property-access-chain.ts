import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function clonePropertyAccessChain(node: TS.PropertyAccessChain, options: CloneNodeVisitorOptions<TS.PropertyAccessChain>): TS.PropertyAccessChain {
	return options.factory.createPropertyAccessChain(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("questionDotToken", options.nextNode(node.questionDotToken), node.questionDotToken),
		options.hook("name", options.nextNode(node.name), node.name)
	);
}
