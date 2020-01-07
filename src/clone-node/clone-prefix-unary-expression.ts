import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function clonePrefixUnaryExpression(
	node: TS.PrefixUnaryExpression,
	options: CloneNodeInternalOptions<TS.PrefixUnaryExpression>
): TS.PrefixUnaryExpression {
	return options.typescript.createPrefix(
		options.hook("operator", node.operator, node.operator, payload(options)),
		options.hook("operand", cloneNode(node.operand, nextOptions(node.operand, options)), node.operand, payload(options))
	);
}
