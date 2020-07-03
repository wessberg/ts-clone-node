import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneBinaryExpression(node: TS.BinaryExpression, options: CloneNodeVisitorOptions<TS.BinaryExpression>): TS.BinaryExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.BinaryExpression, options: CloneNodeVisitorOptions<TS.BinaryExpression>): TS.BinaryExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createBinary(
		options.hook("left", options.nextNode(node.left), node.left) as never,
		options.hook("operatorToken", options.nextNode(node.operatorToken), node.operatorToken) as never,
		options.hook("right", options.nextNode(node.right), node.right) as never
	) as unknown) as TS.BinaryExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.BinaryExpression, options: CloneNodeVisitorOptions<TS.BinaryExpression>): TS.BinaryExpression {
	return options.factory.createBinaryExpression(
		options.hook("left", options.nextNode(node.left), node.left),
		options.hook("operatorToken", options.nextNode(node.operatorToken), node.operatorToken),
		options.hook("right", options.nextNode(node.right), node.right)
	);
}
