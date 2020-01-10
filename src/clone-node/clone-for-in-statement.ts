import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneForInStatement(node: TS.ForInStatement, options: CloneNodeVisitorOptions<TS.ForInStatement>): TS.ForInStatement {
	return options.typescript.createForIn(
		options.hook("initializer", options.nextNode(node.initializer), node.initializer),
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
