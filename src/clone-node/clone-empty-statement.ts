import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneEmptyStatement(_node: TS.EmptyStatement, options: CloneNodeVisitorOptions<TS.EmptyStatement>): TS.EmptyStatement {
	return options.factory.createEmptyStatement();
}
