import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneWhileStatement(node: TS.WhileStatement, options: CloneNodeVisitorOptions<TS.WhileStatement>): TS.WhileStatement {
	return options.factory.createWhileStatement(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
