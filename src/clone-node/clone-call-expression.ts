import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "helpertypes";

export function cloneCallExpression(node: TS.CallExpression, options: CloneNodeVisitorOptions<TS.CallExpression>): TS.CallExpression {
	const clonedCallExpression = options.factory.createCallExpression(
		options.hook("expression", options.nextNode(node.expression), node.expression),
		options.hook("typeArguments", options.nextNodes(node.typeArguments), node.typeArguments),
		options.hook("arguments", options.nextNodes(node.arguments), node.arguments)
	);

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
