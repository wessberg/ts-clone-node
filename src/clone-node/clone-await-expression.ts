import {AwaitExpression, createAwait} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneAwaitExpression (node: AwaitExpression, options: CloneNodeInternalOptions<AwaitExpression>): AwaitExpression {
	return createAwait(
		options.hook("expression", cloneNode(node.expression))
	);
}