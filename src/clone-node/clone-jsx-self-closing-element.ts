import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNode} from "./clone-node";
import {cloneNodes} from "./clone-nodes";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneJsxSelfClosingElement(
	node: TS.JsxSelfClosingElement,
	options: CloneNodeInternalOptions<TS.JsxSelfClosingElement>
): TS.JsxSelfClosingElement {
	return options.typescript.createJsxSelfClosingElement(
		options.hook("tagName", cloneNode(node.tagName, nextOptions(node.tagName, options)), node.tagName, payload(options)),
		options.hook("typeArguments", cloneNodes(node.typeArguments, nextOptions(node.typeArguments, options)), node.typeArguments, payload(options)),
		options.hook("attributes", cloneNode(node.attributes, nextOptions(node.attributes, options)), node.attributes, payload(options))
	);
}
