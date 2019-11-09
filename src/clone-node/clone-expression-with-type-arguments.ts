import {createExpressionWithTypeArguments, ExpressionWithTypeArguments} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";

export function cloneExpressionWithTypeArguments (node: ExpressionWithTypeArguments, options: CloneNodeInternalOptions<ExpressionWithTypeArguments>): ExpressionWithTypeArguments {
	return createExpressionWithTypeArguments(
		options.hook("typeArguments", cloneNodes(node.typeArguments)),
		options.hook("expression", cloneNode(node.expression))
	);
}