import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneAsExpression(node: TS.AsExpression, options: CloneNodeInternalOptions<TS.AsExpression>): TS.AsExpression {
	return options.typescript.createAsExpression(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(options)), node.type, payload(options))
	);
}
