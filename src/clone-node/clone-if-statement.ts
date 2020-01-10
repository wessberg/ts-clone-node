import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneIfStatement(node: TS.IfStatement, options: CloneNodeVisitorOptions<TS.IfStatement>): TS.IfStatement {
	return options.typescript.createIf(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("thenStatement", options.nextNode(node.thenStatement), node.thenStatement),
		options.hook("elseStatement", options.nextNode(node.elseStatement), node.elseStatement)
	);
}
