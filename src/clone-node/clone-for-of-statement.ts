import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneForOfStatement(node: TS.ForOfStatement, options: CloneNodeVisitorOptions<TS.ForOfStatement>): TS.ForOfStatement {
	return options.factory.createForOfStatement(
		options.hook("awaitModifier", options.nextNode(node.awaitModifier), node.awaitModifier),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer),
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("statement", options.nextNode(node.statement), node.statement)
	);
}
