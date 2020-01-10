import {CloneNodeVisitorOptions} from "./clone-node-options";
import {TS} from "./type/ts";

export function cloneJSDocSignature(node: TS.JSDocSignature, options: CloneNodeVisitorOptions<TS.JSDocSignature>): TS.JSDocSignature {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocSignature, -1, -1) as TS.JSDocSignature;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8));
	baseNode.type = options.hook("type", options.nextNode(node.type), node.type);
	baseNode.typeParameters = options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters);
	baseNode.parameters = options.hook("parameters", options.nextNodes(node.parameters), node.parameters);

	return baseNode;
}
