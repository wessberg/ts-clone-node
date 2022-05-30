import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneOmittedExpression(_node: TS.OmittedExpression, options: CloneNodeVisitorOptions<TS.OmittedExpression>): TS.OmittedExpression {
	return options.factory.createOmittedExpression();
}
