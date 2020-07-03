import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneAsExpression(node: TS.AsExpression, options: CloneNodeVisitorOptions<TS.AsExpression>): TS.AsExpression {
	return options.factory.createAsExpression(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
