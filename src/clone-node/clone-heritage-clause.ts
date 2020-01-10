import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneHeritageClause(node: TS.HeritageClause, options: CloneNodeVisitorOptions<TS.HeritageClause>): TS.HeritageClause {
	return options.typescript.createHeritageClause(
		options.hook("token", node.token, node.token),
		options.hook("types", options.nextNodes(node.types), node.types)
	);
}
