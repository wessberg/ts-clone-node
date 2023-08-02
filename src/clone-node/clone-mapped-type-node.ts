import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {TS} from "./type/ts.js";
import {ensureNodeArray} from "./util/ensure-node-array.js";

export function cloneMappedTypeNode(node: TS.MappedTypeNode, options: CloneNodeVisitorOptions<TS.MappedTypeNode>): TS.MappedTypeNode {
	return options.factory.createMappedTypeNode(
		options.hook("readonlyToken", options.nextNode(node.readonlyToken), node.readonlyToken),
		options.hook("typeParameter", options.nextNode(node.typeParameter), node.typeParameter),
		options.hook("nameType", options.nextNode(node.nameType), node.nameType),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("type", options.nextNode(node.type), node.type),
		ensureNodeArray(options.hook("members", options.nextNodes(node.members), node.members), options.factory)
	);
}
