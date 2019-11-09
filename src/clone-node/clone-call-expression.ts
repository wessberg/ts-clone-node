import {CallExpression, createCall} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";

export function cloneCallExpression (node: CallExpression, options: CloneNodeInternalOptions<CallExpression>): CallExpression {
	return createCall(
		options.hook("expression", cloneNode(node.expression)),
		options.hook("typeArguments", cloneNodes(node.typeArguments)),
		options.hook("arguments", cloneNodes(node.arguments))
	);
}