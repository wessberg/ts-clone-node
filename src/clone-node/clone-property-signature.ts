import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function clonePropertySignature(node: TS.PropertySignature, options: CloneNodeVisitorOptions<TS.PropertySignature>): TS.PropertySignature {
	return options.factory.createPropertySignature(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
