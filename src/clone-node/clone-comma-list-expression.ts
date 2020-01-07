import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneCommaListExpression(
	node: TS.CommaListExpression,
	options: CloneNodeInternalOptions<TS.CommaListExpression>
): TS.CommaListExpression {
	return options.typescript.createCommaList(
		options.hook("elements", cloneNodes(node.elements, nextOptions(node.elements, options)), node.elements, payload(options))
	);
}
