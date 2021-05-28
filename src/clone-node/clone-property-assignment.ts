import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";
import {Mutable} from "helpertypes";

export function clonePropertyAssignment(node: TS.PropertyAssignment, options: CloneNodeVisitorOptions<TS.PropertyAssignment>): TS.PropertyAssignment {
	const clonedPropertyAssignment = options.factory.createPropertyAssignment(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);

	// createPropertyAssignment may wrap the initializer expression in parentheses. We want to make sure that we're producing identical clones here,
	// so if the new PropertyAssignment has a ParenthesizedExpression that weren't there before, remove it.
	if (!options.typescript.isParenthesizedExpression(node.initializer) && options.typescript.isParenthesizedExpression(clonedPropertyAssignment.initializer)) {
		(clonedPropertyAssignment as Mutable<TS.PropertyAssignment>).initializer = clonedPropertyAssignment.initializer.expression;
	}

	return clonedPropertyAssignment;
}
