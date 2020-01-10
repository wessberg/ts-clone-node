import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneNotEmittedStatement(
	node: TS.NotEmittedStatement,
	options: CloneNodeVisitorOptions<TS.NotEmittedStatement>
): TS.NotEmittedStatement {
	return options.typescript.createNotEmittedStatement(node);
}
