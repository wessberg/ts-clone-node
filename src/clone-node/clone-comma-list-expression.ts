import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneCommaListExpression(node: TS.CommaListExpression, options: CloneNodeVisitorOptions<TS.CommaListExpression>): TS.CommaListExpression {
	return options.factory.createCommaListExpression(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
