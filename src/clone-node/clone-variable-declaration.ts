import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {Mutable} from "helpertypes";

export function cloneVariableDeclaration(node: TS.VariableDeclaration, options: CloneNodeVisitorOptions<TS.VariableDeclaration>): TS.VariableDeclaration {
	const clonedVariableDeclaration = options.factory.createVariableDeclaration(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("exclamationToken", options.nextNode(node.exclamationToken), node.exclamationToken),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);

	// createVariableDeclaration may wrap the initializer expression in parentheses. We want to make sure that we're producing identical clones here,
	// so if the new VariableDeclaration has a ParenthesizedExpression that weren't there before, remove it.
	if (
		node.initializer != null &&
		clonedVariableDeclaration.initializer != null &&
		!options.typescript.isParenthesizedExpression(node.initializer) &&
		options.typescript.isParenthesizedExpression(clonedVariableDeclaration.initializer)
	) {
		(clonedVariableDeclaration as Mutable<TS.VariableDeclaration>).initializer = clonedVariableDeclaration.initializer.expression;
	}

	return clonedVariableDeclaration;
}
