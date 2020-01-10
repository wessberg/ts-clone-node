import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneExpressionStatement(
	node: TS.ExpressionStatement,
	options: CloneNodeVisitorOptions<TS.ExpressionStatement>
): TS.ExpressionStatement {
	return options.typescript.createExpressionStatement(options.hook("expression", options.nextNode(node.expression), node.expression));
}
