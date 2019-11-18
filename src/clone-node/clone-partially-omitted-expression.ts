import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function clonePartiallyEmittedExpression(
	node: TS.PartiallyEmittedExpression,
	options: CloneNodeInternalOptions<TS.PartiallyEmittedExpression>
): TS.PartiallyEmittedExpression {
	return options.typescript.createPartiallyEmittedExpression(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), payload(options))
	);
}
