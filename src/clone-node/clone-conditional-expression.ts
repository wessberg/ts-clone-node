import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneConditionalExpression(
	node: TS.ConditionalExpression,
	options: CloneNodeInternalOptions<TS.ConditionalExpression>
): TS.ConditionalExpression {
	return options.typescript.createConditional(
		options.hook("condition", cloneNode(node.condition, nextOptions(options)), node.condition, payload(options)),
		options.hook("questionToken", cloneNode(node.questionToken, nextOptions(options)), node.questionToken, payload(options)),
		options.hook("whenTrue", cloneNode(node.whenTrue, nextOptions(options)), node.whenTrue, payload(options)),
		options.hook("colonToken", cloneNode(node.colonToken, nextOptions(options)), node.colonToken, payload(options)),
		options.hook("whenFalse", cloneNode(node.whenFalse, nextOptions(options)), node.whenFalse, payload(options))
	);
}
