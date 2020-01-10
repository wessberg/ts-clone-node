import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneMappedTypeNode(node: TS.MappedTypeNode, options: CloneNodeVisitorOptions<TS.MappedTypeNode>): TS.MappedTypeNode {
	return options.typescript.createMappedTypeNode(
		options.hook("readonlyToken", options.nextNode(node.readonlyToken), node.readonlyToken),
		options.hook("typeParameter", options.nextNode(node.typeParameter), node.typeParameter),
		options.hook("questionToken", options.nextNode(node.questionToken), node.questionToken),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
