import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneThisExpression(_node: TS.ThisExpression, options: CloneNodeInternalOptions<TS.ThisExpression>): TS.ThisExpression {
	return options.typescript.createThis();
}
