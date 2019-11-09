import {createNew, NewExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";

export function cloneNewExpression (node: NewExpression, options: CloneNodeInternalOptions<NewExpression>): NewExpression {
	return createNew(
		options.hook("expression", cloneNode(node.expression)),
		options.hook("typeArguments", cloneNodes(node.typeArguments)),
		options.hook("arguments", cloneNodes(node.arguments) ?? [])
	);
}