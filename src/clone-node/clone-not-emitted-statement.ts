import {createNotEmittedStatement, NotEmittedStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneNotEmittedStatement (node: NotEmittedStatement, _options: CloneNodeInternalOptions<NotEmittedStatement>): NotEmittedStatement {
	return createNotEmittedStatement(node);
}