import {createMethodSignature, MethodSignature} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneMethodSignature (node: MethodSignature, options: CloneNodeInternalOptions<MethodSignature>): MethodSignature {
	return createMethodSignature(
		options.hook("typeParameters", cloneNodes(node.typeParameters)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("type", cloneNode(node.type)),
		options.hook("name", cloneNode(node.name)),
		options.hook("questionToken", cloneNode(node.questionToken))
	);
}