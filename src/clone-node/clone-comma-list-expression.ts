import {CommaListExpression, createCommaList} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneCommaListExpression (node: CommaListExpression, options: CloneNodeInternalOptions<CommaListExpression>): CommaListExpression {
	return createCommaList(
		options.hook("elements", cloneNodes(node.elements))
	);
}