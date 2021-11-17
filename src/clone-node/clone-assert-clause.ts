import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {ensureNodeArray} from "./util/ensure-node-array";

export function cloneAssertClause(node: TS.AssertClause, options: CloneNodeVisitorOptions<TS.AssertClause>): TS.AssertClause {
	return options.factory.createAssertClause(
		ensureNodeArray(options.hook("elements", options.nextNodes(node.elements), node.elements), options.factory),
		options.hook("multiLine", node.multiLine, node.multiLine)
	);
}
