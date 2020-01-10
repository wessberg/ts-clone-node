import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneDebuggerStatement(_node: TS.DebuggerStatement, options: CloneNodeVisitorOptions<TS.DebuggerStatement>): TS.DebuggerStatement {
	return options.typescript.createDebuggerStatement();
}
