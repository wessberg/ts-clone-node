import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneEmptyStatement(_node: TS.EmptyStatement, options: CloneNodeVisitorOptions<TS.EmptyStatement>): TS.EmptyStatement {
	return options.factory.createEmptyStatement();
}
