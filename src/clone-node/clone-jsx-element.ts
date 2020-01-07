import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneJsxElement(node: TS.JsxElement, options: CloneNodeInternalOptions<TS.JsxElement>): TS.JsxElement {
	return options.typescript.createJsxElement(
		options.hook("openingElement", cloneNode(node.openingElement, nextOptions(node.openingElement, options)), node.openingElement, payload(options)),
		options.hook("children", cloneNodes(node.children, nextOptions(node.children, options)), node.children, payload(options)),
		options.hook("closingElement", cloneNode(node.closingElement, nextOptions(node.closingElement, options)), node.closingElement, payload(options))
	);
}
