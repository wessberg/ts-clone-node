import {ConstructSignatureDeclaration, createConstructSignature} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneConstructSignatureDeclaration (node: ConstructSignatureDeclaration, options: CloneNodeInternalOptions<ConstructSignatureDeclaration>): ConstructSignatureDeclaration {
	return createConstructSignature(
		options.hook("typeParameters", cloneNodes(node.typeParameters)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("type", cloneNode(node.type))
	);
}