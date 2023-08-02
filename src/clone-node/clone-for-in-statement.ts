import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneForInStatement(node: TS.ForInStatement, options: CloneNodeVisitorOptions<TS.ForInStatement>): TS.ForInStatement {
	return options.factory.createForInStatement(
		options.hook("initializer", options.nextNode(node.initializer), node.initializer),
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
