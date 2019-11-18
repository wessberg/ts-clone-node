import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneOmittedExpression(_node: TS.OmittedExpression, options: CloneNodeInternalOptions<TS.OmittedExpression>): TS.OmittedExpression {
	return options.typescript.createOmittedExpression();
}
