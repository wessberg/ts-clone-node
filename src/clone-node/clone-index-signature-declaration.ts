import {createIndexSignature, IndexSignatureDeclaration} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneIndexSignatureDeclaration (node: IndexSignatureDeclaration, options: CloneNodeInternalOptions<IndexSignatureDeclaration>): IndexSignatureDeclaration {
	return createIndexSignature(
		options.hook("decorators", cloneNodes(node.decorators)),
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("type", cloneNode(node.type))!
	);
}