import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneEmptyStatement(_node: TS.EmptyStatement, options: CloneNodeVisitorOptions<TS.EmptyStatement>): TS.EmptyStatement {
	return options.typescript.createEmptyStatement();
}
