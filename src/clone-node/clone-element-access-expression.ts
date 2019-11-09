import {createElementAccess, ElementAccessExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneElementAccessExpression (node: ElementAccessExpression, options: CloneNodeInternalOptions<ElementAccessExpression>): ElementAccessExpression {
	return createElementAccess(
		options.hook("expression", cloneNode(node.expression)),
		options.hook("argumentExpression", cloneNode(node.argumentExpression))
	);
}