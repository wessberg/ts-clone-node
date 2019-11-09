import {BinaryExpression, createBinary} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneBinaryExpression (node: BinaryExpression, options: CloneNodeInternalOptions<BinaryExpression>): BinaryExpression {
	return createBinary(
		options.hook("left", cloneNode(node.left)),
		options.hook("operatorToken", cloneNode(node.operatorToken)),
		options.hook("right", cloneNode(node.right))
	);
}