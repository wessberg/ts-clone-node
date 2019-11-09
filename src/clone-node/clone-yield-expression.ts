import {createYield, YieldExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneYieldExpression (node: YieldExpression, options: CloneNodeInternalOptions<YieldExpression>): YieldExpression {
	return createYield(
		options.hook("asteriskToken", cloneNode(node.asteriskToken)),
		options.hook("expression", cloneNode(node.expression))!
	);
}