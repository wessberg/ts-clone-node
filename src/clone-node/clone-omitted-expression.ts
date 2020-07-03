import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

// eslint-disable-next-line @typescript-eslint/naming-convention
export function cloneOmittedExpression(_node: TS.OmittedExpression, options: CloneNodeVisitorOptions<TS.OmittedExpression>): TS.OmittedExpression {
	return options.factory.createOmittedExpression();
}
