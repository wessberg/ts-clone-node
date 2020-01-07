import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneElementAccessExpression(
	node: TS.ElementAccessExpression,
	options: CloneNodeInternalOptions<TS.ElementAccessExpression>
): TS.ElementAccessExpression {
	return options.typescript.createElementAccess(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options)),
		options.hook("argumentExpression", cloneNode(node.argumentExpression, nextOptions(options)), node.argumentExpression, payload(options))
	);
}
