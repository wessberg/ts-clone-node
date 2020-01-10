import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneDoStatement(node: TS.DoStatement, options: CloneNodeVisitorOptions<TS.DoStatement>): TS.DoStatement {
	return options.typescript.createDo(
		options.hook("statement", options.nextNode(node.statement), node.statement),
		options.hook("expression", options.nextNode(node.expression), node.expression)
	);
}
