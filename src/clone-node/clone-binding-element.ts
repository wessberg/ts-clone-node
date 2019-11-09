import {BindingElement, createBindingElement} from "typescript";
import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";

export function cloneBindingElement (node: BindingElement, options: CloneNodeInternalOptions<BindingElement>): BindingElement {
	return createBindingElement(
		options.hook("dotDotDotToken", cloneNode(node.dotDotDotToken)),
		options.hook("propertyName", cloneNode(node.propertyName)),
		options.hook("name", cloneNode(node.name)),
		options.hook("initializer", cloneNode(node.initializer))
	);
}