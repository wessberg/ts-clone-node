import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneNotEmittedStatement(node: TS.NotEmittedStatement, options: CloneNodeVisitorOptions<TS.NotEmittedStatement>): TS.NotEmittedStatement {
	return options.factory.createNotEmittedStatement(node);
}
