import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {ensureNodeArray} from "./util/ensure-node-array.js";

export function cloneAssertClause(node: TS.AssertClause, options: CloneNodeVisitorOptions<TS.AssertClause>): TS.AssertClause {
	return options.factory.createAssertClause(
		ensureNodeArray(options.hook("elements", options.nextNodes(node.elements), node.elements), options.factory),
		options.hook("multiLine", node.multiLine, node.multiLine)
	);
}
