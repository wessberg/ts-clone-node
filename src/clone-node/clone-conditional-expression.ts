import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneConditionalExpression(node: TS.ConditionalExpression, options: CloneNodeVisitorOptions<TS.ConditionalExpression>): TS.ConditionalExpression {
	if ("factory" in options.typescript) {
		return v4Strategy(node, options);
	}

	return v3Strategy(node, options);
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.ConditionalExpression, options: CloneNodeVisitorOptions<TS.ConditionalExpression>): TS.ConditionalExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createConditional(
		options.hook("condition", options.nextNode(node.condition), node.condition) as never,
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken) as never,
		options.hook("whenTrue", options.nextNode(node.whenTrue), node.whenTrue) as never,
		options.hook("colonToken", options.nextNode(node.colonToken), node.colonToken) as never,
		options.hook("whenFalse", options.nextNode(node.whenFalse), node.whenFalse) as never
	) as unknown) as TS.ConditionalExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.ConditionalExpression, options: CloneNodeVisitorOptions<TS.ConditionalExpression>): TS.ConditionalExpression {
	return options.factory.createConditionalExpression(
		options.hook("condition", options.nextNode(node.condition), node.condition),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("whenTrue", options.nextNode(node.whenTrue), node.whenTrue),
		options.hook("colonToken", options.nextNode(node.colonToken), node.colonToken),
		options.hook("whenFalse", options.nextNode(node.whenFalse), node.whenFalse)
	);
}
