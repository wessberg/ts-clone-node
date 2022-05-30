import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneObjectLiteralExpression(node: TS.ObjectLiteralExpression, options: CloneNodeVisitorOptions<TS.ObjectLiteralExpression>): TS.ObjectLiteralExpression {
	return options.factory.createObjectLiteralExpression(options.hook("properties", options.nextNodes(node.properties), node.properties));
}
