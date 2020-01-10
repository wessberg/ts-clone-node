import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneWithStatement(node: TS.WithStatement, options: CloneNodeVisitorOptions<TS.WithStatement>): TS.WithStatement {
	return options.typescript.createWith(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
