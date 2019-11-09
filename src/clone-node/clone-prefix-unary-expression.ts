import {createPrefix, PrefixUnaryExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function clonePrefixUnaryExpression (node: PrefixUnaryExpression, options: CloneNodeInternalOptions<PrefixUnaryExpression>): PrefixUnaryExpression {
	return createPrefix(
		options.hook("operator", cloneNode(node.operator)),
		options.hook("operand", cloneNode(node.operand))
	);
}