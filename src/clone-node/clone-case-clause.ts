import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneCaseClause(node: TS.CaseClause, options: CloneNodeVisitorOptions<TS.CaseClause>): TS.CaseClause {
	return options.factory.createCaseClause(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statements", options.nextNodes(node.statements), node.statements)
	);
}
