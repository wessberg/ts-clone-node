import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneHeritageClause(node: TS.HeritageClause, options: CloneNodeVisitorOptions<TS.HeritageClause>): TS.HeritageClause {
	return options.factory.createHeritageClause(options.hook("token", node.token, node.token), options.hook("types", options.nextNodes(node.types), node.types));
}
