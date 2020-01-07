import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneNonNullExpression(node: TS.NonNullExpression, options: CloneNodeInternalOptions<TS.NonNullExpression>): TS.NonNullExpression {
	return options.typescript.createNonNullExpression(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options))
	);
}
