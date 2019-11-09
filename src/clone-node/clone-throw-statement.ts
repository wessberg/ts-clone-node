import {createThrow, ThrowStatement} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneThrowStatement (node: ThrowStatement, options: CloneNodeInternalOptions<ThrowStatement>): ThrowStatement {
	return createThrow(
		options.hook("expression", cloneNode(node.expression))!
	);
}