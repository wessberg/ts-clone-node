import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneExpressionWithTypeArguments(
	node: TS.ExpressionWithTypeArguments,
	options: CloneNodeInternalOptions<TS.ExpressionWithTypeArguments>
): TS.ExpressionWithTypeArguments {
	return options.typescript.createExpressionWithTypeArguments(
		options.hook("typeArguments", cloneNodes(node.typeArguments, nextOptions(options)), node.typeArguments, payload(options)),
		options.hook("expression", cloneNode(node.expression, nextOptions(options)), node.expression, payload(options))
	);
}
