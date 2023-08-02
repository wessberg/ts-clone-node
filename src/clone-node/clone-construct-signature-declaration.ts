import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneConstructSignatureDeclaration(
	node: TS.ConstructSignatureDeclaration,
	options: CloneNodeVisitorOptions<TS.ConstructSignatureDeclaration>
): TS.ConstructSignatureDeclaration {
	return options.factory.createConstructSignature(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
