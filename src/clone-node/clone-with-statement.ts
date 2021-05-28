import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneWithStatement(node: TS.WithStatement, options: CloneNodeVisitorOptions<TS.WithStatement>): TS.WithStatement {
	return options.factory.createWithStatement(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
