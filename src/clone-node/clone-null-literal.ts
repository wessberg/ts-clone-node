import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneNullLiteral(_node: TS.NullLiteral, options: CloneNodeInternalOptions<TS.NullLiteral>): TS.NullLiteral {
	return options.typescript.createNull();
}
