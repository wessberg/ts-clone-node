import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneNotEmittedStatement(
	node: TS.NotEmittedStatement,
	options: CloneNodeInternalOptions<TS.NotEmittedStatement>
): TS.NotEmittedStatement {
	return options.typescript.createNotEmittedStatement(node);
}
