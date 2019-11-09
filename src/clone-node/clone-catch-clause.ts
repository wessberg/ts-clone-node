import {CatchClause, createCatchClause} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneCatchClause (node: CatchClause, options: CloneNodeInternalOptions<CatchClause>): CatchClause {
	return createCatchClause(
		options.hook("variableDeclaration", cloneNode(node.variableDeclaration)),
		options.hook("block", cloneNode(node.block))
	);
}