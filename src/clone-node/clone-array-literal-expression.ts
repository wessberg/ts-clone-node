import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {TS} from "./type/ts.js";

export function cloneArrayLiteralExpression(node: TS.ArrayLiteralExpression, options: CloneNodeVisitorOptions<TS.ArrayLiteralExpression>): TS.ArrayLiteralExpression {
	return options.factory.createArrayLiteralExpression(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
