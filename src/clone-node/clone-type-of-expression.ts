import {createTypeOf, TypeOfExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneTypeOfExpression (node: TypeOfExpression, options: CloneNodeInternalOptions<TypeOfExpression>): TypeOfExpression {
	return createTypeOf(
		options.hook("expression", cloneNode(node.expression))
	);
}