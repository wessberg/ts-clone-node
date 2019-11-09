import {createParen, ParenthesizedExpression} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneParenthesizedExpression (node: ParenthesizedExpression, options: CloneNodeInternalOptions<ParenthesizedExpression>): ParenthesizedExpression {
	return createParen(
		options.hook("expression", cloneNode(node.expression))
	);
}