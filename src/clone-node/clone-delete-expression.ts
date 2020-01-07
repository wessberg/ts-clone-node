import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneDeleteExpression(node: TS.DeleteExpression, options: CloneNodeInternalOptions<TS.DeleteExpression>): TS.DeleteExpression {
	return options.typescript.createDelete(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options))
	);
}
