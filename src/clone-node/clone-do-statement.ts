import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneDoStatement(node: TS.DoStatement, options: CloneNodeVisitorOptions<TS.DoStatement>): TS.DoStatement {
	return options.factory.createDoStatement(
		options.hook("statement", options.nextNode(node.statement), node.statement),
		options.hook("expression", options.nextNode(node.expression), node.expression)
	);
}
