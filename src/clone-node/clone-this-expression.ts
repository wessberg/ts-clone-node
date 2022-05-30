import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneThisExpression(_node: TS.ThisExpression, options: CloneNodeVisitorOptions<TS.ThisExpression>): TS.ThisExpression {
	return options.factory.createThis();
}
