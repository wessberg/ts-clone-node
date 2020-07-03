import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneThisExpression(_node: TS.ThisExpression, options: CloneNodeVisitorOptions<TS.ThisExpression>): TS.ThisExpression {
	return options.factory.createThis();
}
