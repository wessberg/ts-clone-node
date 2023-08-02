import type {CloneNodeVisitorOptions} from "./clone-node-options.js";
import type {TS} from "./type/ts.js";

export function cloneCallSignatureDeclaration(node: TS.CallSignatureDeclaration, options: CloneNodeVisitorOptions<TS.CallSignatureDeclaration>): TS.CallSignatureDeclaration {
	return options.factory.createCallSignature(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
