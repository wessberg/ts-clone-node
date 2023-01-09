import {CloneNodeVisitorOptions} from "./clone-node-options.js";
import {TS} from "./type/ts.js";

export function cloneIndexSignatureDeclaration(node: TS.IndexSignatureDeclaration, options: CloneNodeVisitorOptions<TS.IndexSignatureDeclaration>): TS.IndexSignatureDeclaration {
	return options.factory.createIndexSignature(
		options.hook("modifiers", options.nextNodes(node.modifiers), node.modifiers),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)!
	);
}
