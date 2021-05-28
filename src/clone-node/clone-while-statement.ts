import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneWhileStatement(node: TS.WhileStatement, options: CloneNodeVisitorOptions<TS.WhileStatement>): TS.WhileStatement {
	return options.factory.createWhileStatement(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
