import {createNonNullExpression, NonNullExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneNonNullExpression (node: NonNullExpression, options: CloneNodeInternalOptions<NonNullExpression>): NonNullExpression {
	return createNonNullExpression(
		options.hook("expression", cloneNode(node.expression))
	);
}