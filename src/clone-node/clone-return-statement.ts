import {createReturn, ReturnStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneReturnStatement (node: ReturnStatement, options: CloneNodeInternalOptions<ReturnStatement>): ReturnStatement {
	return createReturn(
		options.hook("expression", cloneNode(node.expression))
	);
}