import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneBinaryExpression(node: TS.BinaryExpression, options: CloneNodeVisitorOptions<TS.BinaryExpression>): TS.BinaryExpression {
	return options.factory.createBinaryExpression(
		options.hook("left", options.nextNode(node.left), node.left),
		options.hook("operatorToken", options.nextNode(node.operatorToken), node.operatorToken),
		options.hook("right", options.nextNode(node.right), node.right)
	);
}
