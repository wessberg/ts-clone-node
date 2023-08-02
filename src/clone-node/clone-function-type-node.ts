import type {TS} from "./type/ts.js";
import type {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneFunctionTypeNode(node: TS.FunctionTypeNode, options: CloneNodeVisitorOptions<TS.FunctionTypeNode>): TS.FunctionTypeNode {
	return options.factory.createFunctionTypeNode(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
