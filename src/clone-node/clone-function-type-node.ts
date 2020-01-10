import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneFunctionTypeNode(node: TS.FunctionTypeNode, options: CloneNodeVisitorOptions<TS.FunctionTypeNode>): TS.FunctionTypeNode {
	return options.typescript.createFunctionTypeNode(
		options.hook("typeParameters", options.nextNodes(node.typeParameters), node.typeParameters),
		options.hook("parameters", options.nextNodes(node.parameters), node.parameters),
		options.hook("type", options.nextNode(node.type), node.type)
	);
}
