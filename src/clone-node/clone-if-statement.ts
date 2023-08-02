import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneIfStatement(node: TS.IfStatement, options: CloneNodeVisitorOptions<TS.IfStatement>): TS.IfStatement {
	return options.factory.createIfStatement(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("thenStatement", options.nextNode(node.thenStatement), node.thenStatement),
		options.hook("elseStatement", options.nextNode(node.elseStatement), node.elseStatement)
	);
}
