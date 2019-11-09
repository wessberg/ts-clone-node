import {CaseClause, createCaseClause} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneCaseClause (node: CaseClause, options: CloneNodeInternalOptions<CaseClause>): CaseClause {
	return createCaseClause(
		options.hook("expression", cloneNode(node.expression)),
		options.hook("statements", cloneNodes(node.statements))
	);
}