import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneTryStatement(node: TS.TryStatement, options: CloneNodeVisitorOptions<TS.TryStatement>): TS.TryStatement {
	return options.typescript.createTry(
		options.hook("tryBlock", options.nextNode(node.tryBlock), node.tryBlock),
		options.hook("catchClause", options.nextNode(node.catchClause), node.catchClause),
		options.hook("finallyBlock", options.nextNode(node.finallyBlock), node.finallyBlock)
	);
}
