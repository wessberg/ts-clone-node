import {cloneNode} from "./clone-node";
import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneBindingElement(node: TS.BindingElement, options: CloneNodeInternalOptions<TS.BindingElement>): TS.BindingElement {
	return options.typescript.createBindingElement(
		options.hook("dotDotDotToken", cloneNode(node.dotDotDotToken, nextOptions(options)), node.dotDotDotToken, payload(options)),
		options.hook("propertyName", cloneNode(node.propertyName, nextOptions(options)), node.propertyName, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(options)), node.name, payload(options)),
		options.hook("initializer", cloneNode(node.initializer, nextOptions(options)), node.initializer, payload(options))
	);
}
