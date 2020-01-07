import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneAwaitExpression(node: TS.AwaitExpression, options: CloneNodeInternalOptions<TS.AwaitExpression>): TS.AwaitExpression {
	return options.typescript.createAwait(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options))
	);
}
