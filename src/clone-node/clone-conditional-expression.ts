import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneConditionalExpression(node: TS.ConditionalExpression, options: CloneNodeVisitorOptions<TS.ConditionalExpression>): TS.ConditionalExpression {
	return options.factory.createConditionalExpression(
		options.hook("condition", options.nextNode(node.condition), node.condition),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("whenTrue", options.nextNode(node.whenTrue), node.whenTrue),
		options.hook("colonToken", options.nextNode(node.colonToken), node.colonToken),
		options.hook("whenFalse", options.nextNode(node.whenFalse), node.whenFalse)
	);
}
