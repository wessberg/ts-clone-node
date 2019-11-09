import {CallSignatureDeclaration, createCallSignature} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";

export function cloneCallSignatureDeclaration (node: CallSignatureDeclaration, options: CloneNodeInternalOptions<CallSignatureDeclaration>): CallSignatureDeclaration {
	return createCallSignature(
		options.hook("typeParameters", cloneNodes(node.typeParameters)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("type", cloneNode(node.type))
	);
}