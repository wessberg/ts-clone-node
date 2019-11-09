import {createDo, DoStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneDoStatement (node: DoStatement, options: CloneNodeInternalOptions<DoStatement>): DoStatement {
	return createDo(
		options.hook("statement", cloneNode(node.statement)),
		options.hook("expression", cloneNode(node.expression))
	);
}