import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneNullLiteral(_node: TS.NullLiteral, options: CloneNodeVisitorOptions<TS.NullLiteral>): TS.NullLiteral {
	return options.factory.createNull();
}
