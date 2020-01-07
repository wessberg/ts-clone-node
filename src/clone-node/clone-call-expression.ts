import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneCallExpression(node: TS.CallExpression, options: CloneNodeInternalOptions<TS.CallExpression>): TS.CallExpression {
	return options.typescript.createCall(
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options)),
		options.hook("typeArguments", cloneNodes(node.typeArguments, nextOptions(options)), node.typeArguments, payload(options)),
		options.hook("arguments", cloneNodes(node.arguments, nextOptions(options)), node.arguments, payload(options))
	);
}
