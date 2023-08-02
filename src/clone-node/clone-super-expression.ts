import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneSuperExpression(_node: TS.SuperExpression, options: CloneNodeVisitorOptions<TS.SuperExpression>): TS.SuperExpression {
	return options.factory.createSuper();
}
