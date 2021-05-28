import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneCommaListExpression(node: TS.CommaListExpression, options: CloneNodeVisitorOptions<TS.CommaListExpression>): TS.CommaListExpression {
	return options.factory.createCommaListExpression(options.hook("elements", options.nextNodes(node.elements), node.elements));
}
