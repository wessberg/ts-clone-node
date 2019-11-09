import {createSuper, SuperExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneSuperExpression (_node: SuperExpression, _options: CloneNodeInternalOptions<SuperExpression>): SuperExpression {
	return createSuper();
}