import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function clonePropertyDeclaration(node: TS.PropertyDeclaration, options: CloneNodeVisitorOptions<TS.PropertyDeclaration>): TS.PropertyDeclaration {
	return options.factory.createPropertyDeclaration(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		node.questionToken != null
			? options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken)
			: options.hook("exclamationToken", options.nextNode(node.exclamationToken), node.exclamationToken),
		options.hook("type", options.nextNode(node.type), node.type),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
