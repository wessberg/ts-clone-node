import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneCaseClause(node: TS.CaseClause, options: CloneNodeVisitorOptions<TS.CaseClause>): TS.CaseClause {
	return options.factory.createCaseClause(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statements", options.nextNodes(node.statements), node.statements)
	);
}
