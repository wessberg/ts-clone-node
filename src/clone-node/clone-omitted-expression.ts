import {createOmittedExpression, OmittedExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneOmittedExpression (_node: OmittedExpression, _options: CloneNodeInternalOptions<OmittedExpression>): OmittedExpression {
	return createOmittedExpression();
}