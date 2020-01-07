import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function clonePropertyAccessExpression(
	node: TS.PropertyAccessExpression,
	options: CloneNodeInternalOptions<TS.PropertyAccessExpression>
): TS.PropertyAccessExpression {
	return options.typescript.createPropertyAccess(
		options.hook("expression", cloneNode(node.expression, nextOptions(node.expression, options)), node.expression, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options))
	);
}
