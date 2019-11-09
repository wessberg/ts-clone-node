import {createMappedTypeNode, MappedTypeNode} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";

export function cloneMappedTypeNode (node: MappedTypeNode, options: CloneNodeInternalOptions<MappedTypeNode>): MappedTypeNode {
	return createMappedTypeNode(
		options.hook("readonlyToken", cloneNode(node.readonlyToken)),
		options.hook("typeParameter", cloneNode(node.typeParameter)),
		options.hook("questionToken", cloneNode(node.questionToken)),
		options.hook("type", cloneNode(node.type))
	);
}