import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneVariableDeclaration(
	node: TS.VariableDeclaration,
	options: CloneNodeVisitorOptions<TS.VariableDeclaration>
): TS.VariableDeclaration {
	return options.typescript.createVariableDeclaration(
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
