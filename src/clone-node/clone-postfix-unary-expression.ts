import {createPostfix, PostfixUnaryExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function clonePostfixUnaryExpression (node: PostfixUnaryExpression, options: CloneNodeInternalOptions<PostfixUnaryExpression>): PostfixUnaryExpression {
	return createPostfix(
		options.hook("operand", cloneNode(node.operand)),
		options.hook("operator", cloneNode(node.operator))
	);
}