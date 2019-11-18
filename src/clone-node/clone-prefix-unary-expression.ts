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
		options.hook("operator", cloneNode(node.operator, nextOptions(options)), payload(options)),
		options.hook("operand", cloneNode(node.operand, nextOptions(options)), payload(options))
	);
}
