import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneForStatement(node: TS.ForStatement, options: CloneNodeVisitorOptions<TS.ForStatement>): TS.ForStatement {
	return options.typescript.createFor(
		options.hook("initializer", options.nextNode(node.initializer), node.initializer),
		options.hook("condition", options.nextNode(node.condition), node.condition),
		options.hook("incrementor", options.nextNode(node.incrementor), node.incrementor),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
