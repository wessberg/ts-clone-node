import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneDefaultClause(node: TS.DefaultClause, options: CloneNodeVisitorOptions<TS.DefaultClause>): TS.DefaultClause {
	return options.factory.createDefaultClause(options.hook("statements", options.nextNodes(node.statements), node.statements));
}
