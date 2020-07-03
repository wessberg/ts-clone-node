import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneSuperExpression(_node: TS.SuperExpression, options: CloneNodeVisitorOptions<TS.SuperExpression>): TS.SuperExpression {
	return options.factory.createSuper();
}
