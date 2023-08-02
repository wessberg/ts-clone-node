import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneExpressionStatement(node: TS.ExpressionStatement, options: CloneNodeVisitorOptions<TS.ExpressionStatement>): TS.ExpressionStatement {
	return options.factory.createExpressionStatement(options.hook("expression", options.nextNode(node.expression), node.expression));
}
