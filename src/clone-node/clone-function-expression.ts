import {createFunctionExpression, FunctionExpression} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneFunctionExpression (node: FunctionExpression, options: CloneNodeInternalOptions<FunctionExpression>): FunctionExpression {
	return createFunctionExpression(
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("asteriskToken", cloneNode(node.asteriskToken)),
		options.hook("name", cloneNode(node.name)),
		options.hook("typeParameters", cloneNodes(node.typeParameters)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("type", cloneNode(node.type)),
		options.hook("body", cloneNode(node.body))
	);
}