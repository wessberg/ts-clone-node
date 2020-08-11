import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneCallExpression(node: TS.CallExpression, options: CloneNodeVisitorOptions<TS.CallExpression>): TS.CallExpression {
	let clonedCallExpression: TS.CallExpression;

	if ("factory" in options.typescript) {
		clonedCallExpression = v4Strategy(node, options);
	} else {
		clonedCallExpression = v3Strategy(node, options);
	}

	// createCallExpression may wrap the arguments in parentheses. We want to make sure that we're producing identical clones here,
	// so if the arguments of the new CallExpression has a ParenthesizedExpression that weren't there before, remove it.
	for (let i = 0; i < clonedCallExpression.arguments.length; i++) {
		const argument = clonedCallExpression.arguments[i];

		if (!options.typescript.isParenthesizedExpression(node.arguments[i]) && options.typescript.isParenthesizedExpression(argument)) {
			(clonedCallExpression.arguments[i] as Mutable<TS.Expression>) = argument.expression;
		}
	}

	return clonedCallExpression;
}

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.CallExpression, options: CloneNodeVisitorOptions<TS.CallExpression>): TS.CallExpression {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createCall(
		options.hook("expression", options.nextNode(node.expression), node.expression) as never,
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments) as never,
		options.hook("arguments", options.nextNodes(node.arguments), node.arguments) as never
	) as unknown) as TS.CallExpression;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.CallExpression, options: CloneNodeVisitorOptions<TS.CallExpression>): TS.CallExpression {
	return options.factory.createCallExpression(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("arguments", options.nextNodes(node.arguments), node.arguments)
	);
}
