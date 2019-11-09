import {createPropertyAccess, PropertyAccessExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function clonePropertyAccessExpression (node: PropertyAccessExpression, options: CloneNodeInternalOptions<PropertyAccessExpression>): PropertyAccessExpression {
	return createPropertyAccess(
		options.hook("expression", cloneNode(node.expression)),
		options.hook("name", cloneNode(node.name))
	);
}