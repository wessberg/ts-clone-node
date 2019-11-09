import {ArrowFunction, createArrowFunction} from "typescript";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";

export function cloneArrowFunction (node: ArrowFunction, options: CloneNodeInternalOptions<ArrowFunction>): ArrowFunction {
	return createArrowFunction(
		options.hook("modifiers", cloneNodes(node.modifiers)),
		options.hook("typeParameters", cloneNodes(node.typeParameters)),
		options.hook("parameters", cloneNodes(node.parameters)),
		options.hook("type", cloneNode(node.type)),
		options.hook("equalsGreaterThanToken", cloneNode(node.equalsGreaterThanToken)),
		options.hook("body", cloneNode(node.body))
	);
}