import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneIndexSignatureDeclaration(
	node: TS.IndexSignatureDeclaration,
	options: CloneNodeVisitorOptions<TS.IndexSignatureDeclaration>
): TS.IndexSignatureDeclaration {
	return options.typescript.createIndexSignature(
		options.hook("decorators", options.nextNodes(node.decorators), node.decorators),
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)!
	);
}
