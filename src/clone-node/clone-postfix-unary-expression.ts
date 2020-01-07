import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function clonePostfixUnaryExpression(
	node: TS.PostfixUnaryExpression,
	options: CloneNodeInternalOptions<TS.PostfixUnaryExpression>
): TS.PostfixUnaryExpression {
	return options.typescript.createPostfix(
		options.hook("operand", cloneNode(node.operand, nextOptions(options)), node.operand, payload(options)),
		options.hook("operator", node.operator, node.operator, payload(options))
	);
}
