import {createVoid, VoidExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneVoidExpression (node: VoidExpression, options: CloneNodeInternalOptions<VoidExpression>): VoidExpression {
	return createVoid(
		options.hook("expression", cloneNode(node.expression))
	);
}