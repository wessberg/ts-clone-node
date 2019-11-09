import {BreakStatement, createBreak} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneBreakStatement (node: BreakStatement, options: CloneNodeInternalOptions<BreakStatement>): BreakStatement {
	return createBreak(
		options.hook("label", cloneNode(node.label))
	);
}