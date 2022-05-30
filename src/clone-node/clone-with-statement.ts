import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneWithStatement(node: TS.WithStatement, options: CloneNodeVisitorOptions<TS.WithStatement>): TS.WithStatement {
	return options.factory.createWithStatement(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
