import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneNullLiteral(_node: TS.NullLiteral, options: CloneNodeVisitorOptions<TS.NullLiteral>): TS.NullLiteral {
	return options.typescript.createNull();
}
