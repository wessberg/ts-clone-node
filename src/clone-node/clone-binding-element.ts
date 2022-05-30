import {TS} from "./type/ts.js";
import {CloneNodeVisitorOptions} from "./clone-node-options.js";

export function cloneBindingElement(node: TS.BindingElement, options: CloneNodeVisitorOptions<TS.BindingElement>): TS.BindingElement {
	return options.factory.createBindingElement(
		options.hook("dotDotDotToken", options.nextNode(node.dotDotDotToken), node.dotDotDotToken),
		options.hook("propertyName", options.nextNode(node.propertyName), node.propertyName),
		options.hook("name", options.nextNode(node.name), node.name),
		options.hook("initializer", options.nextNode(node.initializer), node.initializer)
	);
}
