import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneParenthesizedExpression(
	node: TS.ParenthesizedExpression,
	options: CloneNodeInternalOptions<TS.ParenthesizedExpression>
): TS.ParenthesizedExpression {
	return options.typescript.createParen(
		options.hook("expression", cloneNode(node.expression, nextOptions(node.expression, options)), node.expression, payload(options))
	);
}
