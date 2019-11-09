import {createThis, ThisExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneThisExpression (_node: ThisExpression, _options: CloneNodeInternalOptions<ThisExpression>): ThisExpression {
	return createThis();
}