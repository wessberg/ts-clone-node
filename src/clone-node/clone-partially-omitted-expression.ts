import {createPartiallyEmittedExpression, PartiallyEmittedExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function clonePartiallyEmittedExpression (node: PartiallyEmittedExpression, options: CloneNodeInternalOptions<PartiallyEmittedExpression>): PartiallyEmittedExpression {
	return createPartiallyEmittedExpression(
		options.hook("expression", cloneNode(node.expression))
	);
}