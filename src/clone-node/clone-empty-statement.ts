import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneEmptyStatement(_node: TS.EmptyStatement, options: CloneNodeInternalOptions<TS.EmptyStatement>): TS.EmptyStatement {
	return options.typescript.createEmptyStatement();
}
