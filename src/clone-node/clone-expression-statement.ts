import {createExpressionStatement, ExpressionStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneExpressionStatement (node: ExpressionStatement, options: CloneNodeInternalOptions<ExpressionStatement>): ExpressionStatement {
	return createExpressionStatement(
		options.hook("expression", cloneNode(node.expression))
	);
}