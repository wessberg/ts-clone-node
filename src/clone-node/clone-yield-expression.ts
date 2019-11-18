import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneYieldExpression(node: TS.YieldExpression, options: CloneNodeInternalOptions<TS.YieldExpression>): TS.YieldExpression {
	return options.typescript.createYield(
		options.hook("asteriskToken", cloneNode(node.asteriskToken, nextOptions(options)), payload(options)),
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), payload(options))!
	);
}
