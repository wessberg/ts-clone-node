import {ArrayLiteralExpression, createArrayLiteral} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneArrayLiteralExpression (node: ArrayLiteralExpression, options: CloneNodeInternalOptions<ArrayLiteralExpression>): ArrayLiteralExpression {
	return createArrayLiteral(
		options.hook("elements", cloneNodes(node.elements))
	);
}