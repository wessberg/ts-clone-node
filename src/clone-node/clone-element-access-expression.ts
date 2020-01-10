import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneElementAccessExpression(
	node: TS.ElementAccessExpression,
	options: CloneNodeVisitorOptions<TS.ElementAccessExpression>
): TS.ElementAccessExpression {
	return options.typescript.createElementAccess(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("argumentExpression", options.nextNode(node.argumentExpression), node.argumentExpression)
	);
}
