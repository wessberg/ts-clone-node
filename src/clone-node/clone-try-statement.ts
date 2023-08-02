import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneTryStatement(node: TS.TryStatement, options: CloneNodeVisitorOptions<TS.TryStatement>): TS.TryStatement {
	return options.factory.createTryStatement(
		options.hook("tryBlock", options.nextNode(node.tryBlock), node.tryBlock),
		options.hook("catchClause", options.nextNode(node.catchClause), node.catchClause),
		options.hook("finallyBlock", options.nextNode(node.finallyBlock), node.finallyBlock)
	);
}
