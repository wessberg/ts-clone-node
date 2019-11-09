import {ConditionalExpression, createConditional} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneConditionalExpression (node: ConditionalExpression, options: CloneNodeInternalOptions<ConditionalExpression>): ConditionalExpression {
	return createConditional(
		options.hook("condition", cloneNode(node.condition)),
		options.hook("questionToken", cloneNode(node.questionToken)),
		options.hook("whenTrue", cloneNode(node.whenTrue)),
		options.hook("colonToken", cloneNode(node.colonToken)),
		options.hook("whenFalse", cloneNode(node.whenFalse))
	);
}