import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneArrayLiteralExpression(
	node: TS.ArrayLiteralExpression,
	options: CloneNodeVisitorOptions<TS.ArrayLiteralExpression>
): TS.ArrayLiteralExpression {
	return options.typescript.createArrayLiteral(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
