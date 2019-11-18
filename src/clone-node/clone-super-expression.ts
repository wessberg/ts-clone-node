import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneSuperExpression(_node: TS.SuperExpression, options: CloneNodeInternalOptions<TS.SuperExpression>): TS.SuperExpression {
	return options.typescript.createSuper();
}
