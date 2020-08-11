import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "./util/mutable";

export function cloneVariableDeclaration(node: TS.VariableDeclaration, options: CloneNodeVisitorOptions<TS.VariableDeclaration>): TS.VariableDeclaration {
	let clonedVariableDeclaration: TS.VariableDeclaration;

	if ("factory" in options.typescript) {
		clonedVariableDeclaration = v4Strategy(node, options);
	} else {
		clonedVariableDeclaration = v3Strategy(node, options);
	}

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

/**
 * Relevant to TypeScript v3.x
 */
function v3Strategy(node: TS.VariableDeclaration, options: CloneNodeVisitorOptions<TS.VariableDeclaration>): TS.VariableDeclaration {
	const typescript = (options.typescript as unknown) as typeof import("typescript-3-9-2");

	return (typescript.createVariableDeclaration(
		options.hook("name", options.nextNode(node.name), node.name) as never,
		options.hook("type", options.nextNode(node.type), node.type) as never,
		options.hook("initializer", options.nextNode(node.initializer), node.initializer) as never
	) as unknown) as TS.VariableDeclaration;
}

/**
 * Relevant to TypeScript v4.x
 */
function v4Strategy(node: TS.VariableDeclaration, options: CloneNodeVisitorOptions<TS.VariableDeclaration>): TS.VariableDeclaration {
	return options.factory.createVariableDeclaration(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("exclamationToken", options.nextNode(node.exclamationToken), node.exclamationToken),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
