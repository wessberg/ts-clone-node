import {createDelete, DeleteExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneDeleteExpression (node: DeleteExpression, options: CloneNodeInternalOptions<DeleteExpression>): DeleteExpression {
	return createDelete(
		options.hook("expression", cloneNode(node.expression))
	);
}