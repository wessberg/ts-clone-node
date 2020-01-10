import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function clonePropertyAccessExpression(
	node: TS.PropertyAccessExpression,
	options: CloneNodeVisitorOptions<TS.PropertyAccessExpression>
): TS.PropertyAccessExpression {
	return options.typescript.createPropertyAccess(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("name", options.nextNode(node.name), node.name)
	);
}
