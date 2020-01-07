import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneArrayLiteralExpression(
	node: TS.ArrayLiteralExpression,
	options: CloneNodeInternalOptions<TS.ArrayLiteralExpression>
): TS.ArrayLiteralExpression {
	return options.typescript.createArrayLiteral(
		options.hook("elements", cloneNodes(node.elements, nextOptions(options)), node.elements, payload(options))
	);
}
