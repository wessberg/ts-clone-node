import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

// eslint-disable-next-line @typescript-eslint/naming-convention
export function cloneSuperExpression(_node: TS.SuperExpression, options: CloneNodeVisitorOptions<TS.SuperExpression>): TS.SuperExpression {
	return options.factory.createSuper();
}
