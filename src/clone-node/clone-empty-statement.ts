import {createEmptyStatement, EmptyStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneEmptyStatement (_node: EmptyStatement, _options: CloneNodeInternalOptions<EmptyStatement>): EmptyStatement {
	return createEmptyStatement();
}