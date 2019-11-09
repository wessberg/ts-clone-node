import {AsExpression, createAsExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneAsExpression (node: AsExpression, options: CloneNodeInternalOptions<AsExpression>): AsExpression {
	return createAsExpression(
		options.hook("expression", cloneNode(node.expression)),
		options.hook("type", cloneNode(node.type))
	);
}