import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneAsExpression(node: TS.AsExpression, options: CloneNodeVisitorOptions<TS.AsExpression>): TS.AsExpression {
	return options.factory.createAsExpression(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
