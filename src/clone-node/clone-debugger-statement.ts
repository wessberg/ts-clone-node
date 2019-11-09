import {createDebuggerStatement, DebuggerStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneDebuggerStatement (_node: DebuggerStatement, _options: CloneNodeInternalOptions<DebuggerStatement>): DebuggerStatement {
	return createDebuggerStatement();
}