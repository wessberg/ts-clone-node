import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function clonePrefixUnaryExpression(node: TS.PrefixUnaryExpression, options: CloneNodeVisitorOptions<TS.PrefixUnaryExpression>): TS.PrefixUnaryExpression {
	return options.factory.createPrefixUnaryExpression(options.hook("operator", node.operator, node.operator), options.hook("operand", options.nextNode(node.operand), node.operand));
}
