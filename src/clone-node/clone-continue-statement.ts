import {ContinueStatement, createContinue} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneContinueStatement (node: ContinueStatement, options: CloneNodeInternalOptions<ContinueStatement>): ContinueStatement {
	return createContinue(
		options.hook("label", cloneNode(node.label))
	);
}