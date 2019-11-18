import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneDebuggerStatement(_node: TS.DebuggerStatement, options: CloneNodeInternalOptions<TS.DebuggerStatement>): TS.DebuggerStatement {
	return options.typescript.createDebuggerStatement();
}
