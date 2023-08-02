import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneDebuggerStatement(_node: TS.DebuggerStatement, options: CloneNodeVisitorOptions<TS.DebuggerStatement>): TS.DebuggerStatement {
	return options.factory.createDebuggerStatement();
}
