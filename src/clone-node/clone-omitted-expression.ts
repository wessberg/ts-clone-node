import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneOmittedExpression(_node: TS.OmittedExpression, options: CloneNodeVisitorOptions<TS.OmittedExpression>): TS.OmittedExpression {
	return options.factory.createOmittedExpression();
}
